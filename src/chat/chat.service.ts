import { Injectable, Logger, NotFoundException, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
// Import PatientCentricConversation and other necessary types from chat.types.ts
import { Message, Doctor, PatientInfo, PatientCentricConversation, MessageAttachment } from '../types/chat.types';
import { SendMessageDto, AttachmentDto } from './dto/send-message.dto';

import { S3 } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ChatService {
  private readonly logger = new Logger(ChatService.name);
  private readonly s3: S3;

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {
    this.s3 = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
      signatureVersion: 'v4', // Good practice for signed URLs
    });
  }

  async validateToken(token: string): Promise<any> { // Consider returning a more specific Doctor type
    try {
      const payload = this.jwtService.verify(token);
      const doctorId = payload.associated_data.id;
      const doctor = await this.prisma.doctors.findUnique({
        where: { id: doctorId },
      });
      if (!doctor) {
        this.logger.warn(`Token validated for doctor ${doctorId} but doctor not found.`);
        return null;
      }
      return doctor; // Return the full doctor object
    } catch (error) {
      this.logger.error('Token validation failed', error);
      return null;
    }
  }

  async createMessage(
    senderId: string,
    data: SendMessageDto,
  ): Promise<Message> {
    try {
      const receiverExists = await this.prisma.doctors.findUnique({ where: { id: data.receiverId } });
      if (!receiverExists) {
        throw new NotFoundException(`Receiver doctor with ID ${data.receiverId} not found.`);
      }
      // Optional: Validate patientId if you have a patients table and it's required for all messages
      // const patientExists = await this.prisma.patients.findUnique({ where: { id: data.patientId } });
      // if (!patientExists) {
      //   throw new NotFoundException(`Patient with ID ${data.patientId} not found.`);
      // }

      const messageData: any = { // Type this more strictly if possible
        content: data.content,
        senderId: senderId,
        receiverId: data.receiverId,
        patientId: data.patientId, // Include patientId
      };

      if (data.attachments && data.attachments.length > 0) {
        messageData.attachments = {
          create: data.attachments.map(att => ({
            filename: att.filename,
            path: att.path, // This is the S3 key
            mimeType: att.mimeType,
            size: parseInt(att.size, 10), // Convert string size from DTO to number for Prisma
          })),
        };
      }

      const message = await this.prisma.message.create({
        data: messageData,
        include: {
          attachments: true,
          sender: true,
          receiver: true,
          // If you have a 'patient' relation defined in Prisma Message model:
          // patient: true,
        },
      });

      // Ensure the returned message conforms to the Message interface, especially attachment URLs
      const typedMessage = message as Message;
      if (typedMessage.attachments) {
        for (const att of typedMessage.attachments) {
          if (att.path) {
            (att as MessageAttachment).url = await this.getSignedUrlForAttachment(att.path);
          }
        }
      }
      return typedMessage;

    } catch (error) {
      this.logger.error('Failed to create message', error);
      throw error;
    }
  }

  async getMessages(
    userId: string,
    otherUserId: string,
    patientId: string,
    cursor?: string,
    limit: number = 20,
  ): Promise<{ messages: Message[]; hasMore: boolean; nextCursor?: string }> {
    try {
      if (!patientId) {
        throw new BadRequestException('Patient ID is required to fetch messages.');
      }

      const messagesFromDb = await this.prisma.message.findMany({
        where: {
          patientId: patientId, // Filter by patientId
          OR: [
            { senderId: userId, receiverId: otherUserId },
            { senderId: otherUserId, receiverId: userId },
          ],
        },
        take: limit + 1,
        skip: cursor ? 1 : 0,
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: { createdAt: 'desc' },
        include: {
          attachments: true,
          sender: true, // Include sender details
          receiver: true, // Include receiver details
        },
      });

      const hasMore = messagesFromDb.length > limit;
      const messagesToReturn = hasMore ? messagesFromDb.slice(0, limit) : messagesFromDb;
      const nextCursor = hasMore ? messagesToReturn[messagesToReturn.length - 1]?.id : undefined;

      // Process messages to add signed URLs to attachments
      const processedMessages: Message[] = await Promise.all(
        messagesToReturn.map(async (msg) => {
          const typedMsg = msg as Message; // Cast to ensure 'attachments' property is recognized
          if (typedMsg.attachments) {
            for (const att of typedMsg.attachments) {
              if (att.path) {
                (att as MessageAttachment).url = await this.getSignedUrlForAttachment(att.path);
              }
            }
          }
          return typedMsg;
        })
      );

      return {
        messages: processedMessages,
        hasMore,
        nextCursor,
      };
    } catch (error) {
      this.logger.error('Failed to get messages', error);
      throw error;
    }
  }


  async markMessageAsRead(messageId: string, readerId: string): Promise<Message> {
    try {
      const messageToUpdate = await this.prisma.message.findUnique({ where: { id: messageId } });
      if (!messageToUpdate) throw new NotFoundException('Message not found');
      if (messageToUpdate.receiverId !== readerId) {
        throw new UnauthorizedException('Cannot mark this message as read');
      }
      // if (messageToUpdate.isRead) return messageToUpdate as Message; // Already read

      const updatedMessage = await this.prisma.message.update({
        where: { id: messageId },
        data: { isRead: true },
        include: {
          attachments: true,
          sender: true,
          receiver: true,
        },
      });

      const typedMessage = updatedMessage as Message;
      if (typedMessage.attachments) {
        for (const att of typedMessage.attachments) {
          if (att.path) {
            (att as MessageAttachment).url = await this.getSignedUrlForAttachment(att.path);
          }
        }
      }
      return typedMessage;

    } catch (error) {
      this.logger.error(`Failed to mark message ${messageId} as read`, error);
      throw error;
    }
  }

  async getConversations(doctorId: string): Promise<PatientCentricConversation[]> {
    this.logger.log(`Getting patient-centric conversations for doctor ${doctorId}`);
    try {
      const conversationsQuery = `
          WITH UserMessages AS (
              SELECT
                  m.id AS message_id,
                  m."content",
                  m."createdAt",
                  m."updatedAt", -- Select updatedAt for lastMessage
                  m."senderId",
                  m."receiverId",
                  m."patientId",
                  m."isRead",
                  CASE
                      WHEN m."senderId" = $1 THEN m."receiverId"
                      ELSE m."senderId"
                      END AS partner_id,
                  ROW_NUMBER() OVER(PARTITION BY
                    CASE WHEN m."senderId" = $1 THEN m."receiverId" ELSE m."senderId" END,
                    m."patientId"
                    ORDER BY m."createdAt" DESC) as rn
              FROM "Message" m
              WHERE (m."senderId" = $1 OR m."receiverId" = $1) AND m."patientId" IS NOT NULL
          ),
               LatestMessagesInContext AS (
                   SELECT * FROM UserMessages WHERE rn = 1
               ),
               UnreadCountsInContext AS (
                   SELECT
                       "senderId" as partner_id,
                       "patientId",
                       COUNT(*) as unread_count
                   FROM "Message"
                   WHERE "receiverId" = $1 AND "isRead" = FALSE AND "patientId" IS NOT NULL
                   GROUP BY "senderId", "patientId"
               )
          SELECT
              d.id as "partnerDoctorId",
              d.first_name as "partnerFirstName",
              d.last_name as "partnerLastName",
              d.profile_image as "partnerProfileImage",
              d.specialty as "partnerSpecialty",
              d.type as "partnerType",
              d.is_license_verified as "partnerIsLicenseVerified",
              d.bio as "partnerBio",
              d.education AS "partnerEducation",
              d.experience AS "partnerExperience",
              d.languages AS "partnerLanguages",
              d.user_id AS "partnerUserId",
              p.id as "patientTableId",
              p.cin as "patientCin",
              lm."patientId" as "messagePatientId",
              lm.message_id,
              lm.content as "lastMessageContent",
              lm."createdAt" as "lastMessageDate",
              lm."updatedAt" as "lastMessageUpdatedAt",
              lm."isRead" as "lastMessageIsRead",
              lm."senderId" as "lastMessageSenderId"
          FROM doctors d
                   JOIN LatestMessagesInContext lm ON d.id = lm.partner_id
                   LEFT JOIN patients p ON lm."patientId" = p.id
                   LEFT JOIN UnreadCountsInContext uc ON d.id = uc.partner_id AND lm."patientId" = uc."patientId"
          WHERE d.id != $1
          ORDER BY lm."createdAt" DESC;
      `;

      const result = await this.prisma.$queryRawUnsafe(conversationsQuery, doctorId) as any[];

      return Promise.all(result.map(async conv => {
        const patientName = conv.patientCin
          ? `Patient CIN: ${conv.patientCin}`
          : `Patient ID: ${conv.messagePatientId ? conv.messagePatientId.substring(0, 8) : 'N/A'}`;

        let partnerDoctorProfileImageUrl = conv.partnerProfileImage;
        if (conv.partnerProfileImage && conv.partnerProfileImage.startsWith('s3key:')) {
          partnerDoctorProfileImageUrl = await this.getSignedUrlForAttachment(conv.partnerProfileImage.replace('s3key:', ''));
        } else if (conv.partnerProfileImage) {
          // Assuming it might be a direct URL if not an S3 key
          partnerDoctorProfileImageUrl = conv.partnerProfileImage;
        }

        // Get unread count from the query result
        const unreadCountQuery = `
          SELECT COUNT(*) as unread_count
          FROM "Message"
          WHERE "receiverId" = $1 AND "senderId" = $2 AND "patientId" = $3 AND "isRead" = FALSE
        `;
        const unreadResult = await this.prisma.$queryRawUnsafe(unreadCountQuery, doctorId, conv.partnerDoctorId, conv.messagePatientId) as any[];
        const unreadCount = Number(unreadResult[0]?.unread_count) || 0;

        return {
          id: `${conv.partnerDoctorId}-${conv.messagePatientId}`,
          partnerDoctor: {
            id: conv.partnerDoctorId,
            first_name: conv.partnerFirstName,
            last_name: conv.partnerLastName,
            profile_image: partnerDoctorProfileImageUrl,
            specialty: conv.partnerSpecialty,
            type: conv.partnerType,
            is_license_verified: conv.partnerIsLicenseVerified,
            bio: conv.partnerBio,
            education: conv.partnerEducation || [],
            experience: conv.partnerExperience || [],
            languages: conv.partnerLanguages || [],
            user_id: conv.partnerUserId,
          } as Doctor,
          patient: {
            id: conv.messagePatientId,
            name: patientName,
          } as PatientInfo,
          lastMessage: conv.lastMessageContent ? {
            id: conv.message_id,
            content: conv.lastMessageContent,
            createdAt: conv.lastMessageDate,
            updatedAt: conv.lastMessageUpdatedAt,
            isRead: conv.lastMessageSenderId === doctorId ? true : conv.lastMessageIsRead,
            senderId: conv.lastMessageSenderId,
            receiverId: conv.lastMessageSenderId === doctorId ? conv.partnerDoctorId : doctorId,
            patientId: conv.messagePatientId,
            attachments: [], // Populating this requires more complex query or separate fetches
          } : undefined,
          unreadCount: unreadCount,
        } as PatientCentricConversation;
      }));
    } catch (error) {
      this.logger.error(`Failed to get patient-centric conversations for doctor ${doctorId}`, error);
      throw error;
    }
  }

  async deleteMessage(messageId: string, doctorId: string): Promise<Message> {
    try {
      const message = await this.prisma.message.findUnique({
        where: { id: messageId },
        include: { attachments: true }
      });

      if (!message) {
        throw new NotFoundException('Message not found');
      }
      if (message.senderId !== doctorId) {
        throw new UnauthorizedException('You can only delete your own messages.');
      }

      // Delete attachments from S3 if they exist
      if (message.attachments && message.attachments.length > 0) {
        for (const attachment of message.attachments) {
          await this.deleteAttachmentFromS3(attachment.path);
        }
      }

      await this.prisma.message.delete({
        where: { id: messageId },
      });

      // Ensure the returned object satisfies the Message interface, including patientId
      return {
        id: message.id,
        content: message.content,
        createdAt: message.createdAt,
        updatedAt: message.updatedAt,
        senderId: message.senderId,
        receiverId: message.receiverId,
        isRead: message.isRead,
        patientId: message.patientId || '', // Handle potential null value
        attachments: [] // Attachments are conceptually gone
      } as Message;

    } catch (error) {
      this.logger.error('Failed to delete message', error);
      throw error;
    }
  }

  async uploadAttachments(files: Array<Express.Multer.File>): Promise<AttachmentDto[]> {
    if (!files || files.length === 0) {
      throw new BadRequestException('No files uploaded.');
    }

    const uploadPromises = files.map(async (file) => {
      const filenameInS3 = `${uuidv4()}-${file.originalname}`;
      const s3Key = `chat-attachments/${filenameInS3}`;

      try {
        await this.s3.putObject({
          Bucket: process.env.AWS_S3_BUCKET_NAME!,
          Key: s3Key,
          Body: file.buffer,
          ContentType: file.mimetype,
          ACL: 'private',
        }).promise();

        return {
          filename: file.originalname,
          path: s3Key, // S3 key
          mimeType: file.mimetype,
          size: file.size.toString(), // DTO expects string
        };
      } catch (error) {
        this.logger.error(`Failed to upload attachment ${file.originalname} to S3`, error);
        throw new Error(`Failed to upload attachment ${file.originalname}: ${error.message}`);
      }
    });

    return Promise.all(uploadPromises);
  }

  async getSignedUrlForAttachment(s3Key: string): Promise<string> {
    if (!s3Key || s3Key === 'null' || s3Key === 'undefined') {
      this.logger.warn(`Attempted to get signed URL for invalid S3 key: ${s3Key}`);
      return '';
    }
    try {
      return await this.s3.getSignedUrlPromise('getObject', {
        Bucket: process.env.AWS_S3_BUCKET_NAME!,
        Key: s3Key,
        Expires: 60 * 60, // 1 hour
      });
    } catch (error) {
      this.logger.error(`Failed to get signed URL for ${s3Key}`, error);
      return '';
    }
  }

  async deleteAttachmentFromS3(s3Key: string): Promise<void> {
    try {
      await this.s3.deleteObject({
        Bucket: process.env.AWS_S3_BUCKET_NAME!,
        Key: s3Key,
      }).promise();
      this.logger.log(`Successfully deleted ${s3Key} from S3.`);
    } catch (error) {
      this.logger.error(`Failed to delete ${s3Key} from S3`, error);
      // Decide if this error should be re-thrown or just logged
    }
  }
}