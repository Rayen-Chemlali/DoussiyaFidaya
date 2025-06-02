import { Injectable, Logger, NotFoundException, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { Message, Doctor, PatientInfo, PatientCentricConversation, DoctorCentricConversation, MessageAttachment } from '../types/chat.types';
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
      signatureVersion: 'v4',
    });
  }

  async validateToken(token: string): Promise<any> {
    try {
      const payload = this.jwtService.verify(token);

      const doctorId = payload.associated_id || payload.associated_data?.id;

      if (!doctorId) {
        this.logger.warn('Token does not contain valid doctor ID');
        return null;
      }

      const doctor = await this.prisma.doctors.findUnique({
        where: { id: doctorId },
        include: {
          users: true
        }
      });

      if (!doctor) {
        this.logger.warn(`Token validated for doctor ${doctorId} but doctor not found.`);
        return null;
      }

      return doctor;
    } catch (error) {
      this.logger.error('Token validation failed', error);
      return null;
    }
  }

  /**
   * Crée un nouveau message
   */
  async createMessage(senderId: string, data: SendMessageDto): Promise<Message> {
    try {
      const receiverExists = await this.prisma.doctors.findUnique({
        where: { id: data.receiverId }
      });
      if (!receiverExists) {
        throw new NotFoundException(`Receiver doctor with ID ${data.receiverId} not found.`);
      }

      const patientExists = await this.prisma.patients.findUnique({
        where: { id: data.patientId }
      });
      if (!patientExists) {
        throw new NotFoundException(`Patient with ID ${data.patientId} not found.`);
      }

      const messageData: any = {
        content: data.content,
        senderId: senderId,
        receiverId: data.receiverId,
        patientId: data.patientId,
      };

      if (data.attachments && data.attachments.length > 0) {
        messageData.attachments = {
          create: data.attachments.map(att => ({
            filename: att.filename,
            path: att.path,
            mimeType: att.mimeType,
            size: parseInt(att.size, 10),
          })),
        };
      }

      const message = await this.prisma.message.create({
        data: messageData,
        include: {
          attachments: true,
          sender: true,
          receiver: true,
        },
      });

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
          patientId: patientId,
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
          sender: true,
          receiver: true,
        },
      });

      const hasMore = messagesFromDb.length > limit;
      const messagesToReturn = hasMore ? messagesFromDb.slice(0, limit) : messagesFromDb;
      const nextCursor = hasMore ? messagesToReturn[messagesToReturn.length - 1]?.id : undefined;

      const processedMessages: Message[] = await Promise.all(
        messagesToReturn.map(async (msg) => {
          const typedMsg = msg as Message;
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
        messages: processedMessages.reverse(),
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
      const messageToUpdate = await this.prisma.message.findUnique({
        where: { id: messageId }
      });

      if (!messageToUpdate) {
        throw new NotFoundException('Message not found');
      }

      if (messageToUpdate.receiverId !== readerId) {
        throw new UnauthorizedException('Cannot mark this message as read');
      }

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


  async getPatientCentricConversations(doctorId: string): Promise<PatientCentricConversation[]> {
    this.logger.log(`Getting patient-centric conversations for doctor ${doctorId}`);

    try {
      const conversationsQuery = `
          WITH UserMessages AS (
              SELECT
                  m.id AS message_id,
                  m."content",
                  m."createdAt",
                  m."updatedAt",
                  m."senderId",
                  m."receiverId",
                  m."patientId",
                  m."isRead",
                  CASE
                      WHEN m."senderId" = $1::UUID THEN m."receiverId"
                      ELSE m."senderId"
                      END AS partner_id,
                  ROW_NUMBER() OVER(
              PARTITION BY
                CASE WHEN m."senderId" = $1::UUID THEN m."receiverId" ELSE m."senderId" END,
                m."patientId"
              ORDER BY m."createdAt" DESC
            ) as rn
              FROM "Message" m
              WHERE (m."senderId" = $1::UUID OR m."receiverId" = $1::UUID)
                AND m."patientId" IS NOT NULL
          ),
               LatestMessagesInContext AS (
                   SELECT * FROM UserMessages WHERE rn = 1
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
          WHERE d.id != $1::UUID
          ORDER BY lm."createdAt" DESC;
      `;

      const result = await this.prisma.$queryRawUnsafe(conversationsQuery, doctorId) as any[];

      return Promise.all(result.map(async conv => {
        const patientName = conv.patientCin
          ? `Patient CIN: ${conv.patientCin}`
          : `Patient ID: ${conv.messagePatientId ? conv.messagePatientId.substring(0, 8) : 'N/A'}`;

        let partnerDoctorProfileImageUrl = conv.partnerProfileImage;
        if (conv.partnerProfileImage && conv.partnerProfileImage.startsWith('s3key:')) {
          partnerDoctorProfileImageUrl = await this.getSignedUrlForAttachment(
            conv.partnerProfileImage.replace('s3key:', '')
          );
        }

        const unreadCountQuery = `
            SELECT COUNT(*) as unread_count
            FROM "Message"
            WHERE "receiverId" = $1::UUID 
            AND "senderId" = $2::UUID
              AND "patientId" = $3::UUID
              AND "isRead" = FALSE
        `;
        const unreadResult = await this.prisma.$queryRawUnsafe(
          unreadCountQuery,
          doctorId,
          conv.partnerDoctorId,
          conv.messagePatientId
        ) as any[];
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
            attachments: [],
          } : undefined,
          unreadCount: unreadCount,
        } as PatientCentricConversation;
      }));
    } catch (error) {
      this.logger.error(`Failed to get patient-centric conversations for doctor ${doctorId}`, error);
      throw error;
    }
  }

  /**
   * Récupère les conversations groupées par docteur (vue centrée docteur comme Messenger)
   */
  async getDoctorCentricConversations(doctorId: string): Promise<DoctorCentricConversation[]> {
    this.logger.log(`Getting doctor-centric conversations for doctor ${doctorId}`);

    try {
      const conversationsQuery = `
        WITH LatestMessagePerDoctor AS (
          SELECT
            CASE
              WHEN m."senderId" = $1::UUID THEN m."receiverId"
              ELSE m."senderId"
            END AS partner_doctor_id,
            MAX(m."createdAt") as latest_message_time
          FROM "Message" m
          WHERE (m."senderId" = $1::UUID OR m."receiverId" = $1::UUID)
            AND m."patientId" IS NOT NULL
          GROUP BY partner_doctor_id
        ),
        LatestMessages AS (
          SELECT
            m.*,
            CASE
              WHEN m."senderId" = $1::UUID THEN m."receiverId"
              ELSE m."senderId"
            END AS partner_doctor_id
          FROM "Message" m
          INNER JOIN LatestMessagePerDoctor lmpd ON 
            CASE
              WHEN m."senderId" = $1::UUID THEN m."receiverId"
              ELSE m."senderId"
            END = lmpd.partner_doctor_id
            AND m."createdAt" = lmpd.latest_message_time
          WHERE (m."senderId" = $1::UUID OR m."receiverId" = $1::UUID)
            AND m."patientId" IS NOT NULL
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
          lm.id as "lastMessageId",
          lm.content as "lastMessageContent",
          lm."createdAt" as "lastMessageDate",
          lm."isRead" as "lastMessageIsRead",
          lm."senderId" as "lastMessageSenderId",
          lm."patientId" as "lastMessagePatientId",
          COUNT(unread_msgs.id) as unread_count
        FROM doctors d
        INNER JOIN LatestMessages lm ON d.id = lm.partner_doctor_id
        LEFT JOIN "Message" unread_msgs ON 
          unread_msgs."senderId" = d.id 
          AND unread_msgs."receiverId" = $1::UUID
          AND unread_msgs."isRead" = FALSE
        WHERE d.id != $1::UUID
        GROUP BY 
          d.id, d.first_name, d.last_name, d.profile_image, d.specialty, d.type,
          d.is_license_verified, d.bio, d.education, d.experience, d.languages, d.user_id,
          lm.id, lm.content, lm."createdAt", lm."isRead", lm."senderId", lm."patientId"
        ORDER BY lm."createdAt" DESC;
      `;

      const result = await this.prisma.$queryRawUnsafe(conversationsQuery, doctorId) as any[];

      return Promise.all(result.map(async conv => {
        let partnerDoctorProfileImageUrl = conv.partnerProfileImage;
        if (conv.partnerProfileImage && conv.partnerProfileImage.startsWith('s3key:')) {
          partnerDoctorProfileImageUrl = await this.getSignedUrlForAttachment(
            conv.partnerProfileImage.replace('s3key:', '')
          );
        }

        // Récupérer tous les patients avec lesquels ces deux docteurs ont communiqué
        const patientsQuery = `
          SELECT DISTINCT 
            p.id, 
            p.cin,
            COUNT(m.id) as message_count,
            MAX(m."createdAt") as last_activity
          FROM "Message" m
          LEFT JOIN patients p ON m."patientId" = p.id
          WHERE (
            (m."senderId" = $1::UUID AND m."receiverId" = $2::UUID) OR
            (m."senderId" = $2::UUID AND m."receiverId" = $1::UUID)
          )
          AND m."patientId" IS NOT NULL
          GROUP BY p.id, p.cin
          ORDER BY last_activity DESC;
        `;

        const patientsResult = await this.prisma.$queryRawUnsafe(
          patientsQuery,
          doctorId,
          conv.partnerDoctorId
        ) as any[];

        const patients = patientsResult.map(p => ({
          id: p.id,
          name: p.cin ? `Patient CIN: ${p.cin}` : `Patient ID: ${p.id?.substring(0, 8) || 'N/A'}`,
          messageCount: Number(p.message_count),
          lastActivity: p.last_activity,
        }));

        return {
          id: conv.partnerDoctorId,
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
          patients: patients,
          lastMessage: {
            id: conv.lastMessageId,
            content: conv.lastMessageContent,
            createdAt: conv.lastMessageDate,
            isRead: conv.lastMessageSenderId === doctorId ? true : conv.lastMessageIsRead,
            senderId: conv.lastMessageSenderId,
            patientId: conv.lastMessagePatientId,
          },
          unreadCount: Number(conv.unread_count) || 0,
          totalMessageCount: patients.reduce((sum, p) => sum + p.messageCount, 0),
        } as DoctorCentricConversation;
      }));
    } catch (error) {
      this.logger.error(`Failed to get doctor-centric conversations for doctor ${doctorId}`, error);
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

      // Supprimer les attachments de S3
      if (message.attachments && message.attachments.length > 0) {
        for (const attachment of message.attachments) {
          if (attachment.path) {
            await this.deleteAttachmentFromS3(attachment.path);
          }
        }
      }

      await this.prisma.message.delete({
        where: { id: messageId },
      });

      return {
        id: message.id,
        content: message.content,
        createdAt: message.createdAt,
        updatedAt: message.updatedAt,
        senderId: message.senderId,
        receiverId: message.receiverId,
        isRead: message.isRead,
        patientId: message.patientId || '',
        attachments: []
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
          path: s3Key,
          mimeType: file.mimetype,
          size: file.size.toString(),
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
        Expires: 3600, // 1 heure
      });
    } catch (error) {
      this.logger.error(`Failed to get signed URL for ${s3Key}`, error);
      return '';
    }
  }

  async deleteAttachmentFromS3(s3Key: string): Promise<void> {
    if (!s3Key) {
      this.logger.warn('Attempted to delete attachment with invalid S3 key.');
      return;
    }

    try {
      await this.s3.deleteObject({
        Bucket: process.env.AWS_S3_BUCKET_NAME!,
        Key: s3Key,
      }).promise();
      this.logger.log(`Successfully deleted ${s3Key} from S3.`);
    } catch (error) {
      this.logger.error(`Failed to delete ${s3Key} from S3`, error);
    }
  }


  async searchDoctors(currentDoctorId: string, searchTerm?: string): Promise<Doctor[]> {
    try {
      const whereCondition: any = {
        id: { not: currentDoctorId }, // Exclure le docteur actuel
      };

      if (searchTerm) {
        whereCondition.OR = [
          { first_name: { contains: searchTerm, mode: 'insensitive' } },
          { last_name: { contains: searchTerm, mode: 'insensitive' } },
          { specialty: { contains: searchTerm, mode: 'insensitive' } },
        ];
      }

      const doctors = await this.prisma.doctors.findMany({
        where: whereCondition,
        take: 20, // Limiter les résultats
        orderBy: [
          { first_name: 'asc' },
          { last_name: 'asc' }
        ]
      });

      return Promise.all(doctors.map(async (doctor) => {
        let profileImageUrl = doctor.profile_image;
        if (doctor.profile_image && doctor.profile_image.startsWith('s3key:')) {
          profileImageUrl = await this.getSignedUrlForAttachment(
            doctor.profile_image.replace('s3key:', '')
          );
        }

        return {
          id: doctor.id,
          first_name: doctor.first_name,
          last_name: doctor.last_name,
          profile_image: profileImageUrl,
          specialty: doctor.specialty,
          type: doctor.type,
          is_license_verified: doctor.is_license_verified,
          bio: doctor.bio,
          education: doctor.education || [],
          experience: doctor.experience || [],
          languages: doctor.languages || [],
          user_id: doctor.user_id,
        } as Doctor;
      }));
    } catch (error) {
      this.logger.error('Failed to search doctors', error);
      throw error;
    }
  }


  async searchPatients(searchTerm?: string): Promise<PatientInfo[]> {
    try {
      const whereCondition: any = {};

      if (searchTerm) {
        const searchNumber = parseInt(searchTerm);
        if (!isNaN(searchNumber)) {
          whereCondition.cin = searchNumber;
        } else {
          // Si ce n'est pas un numéro, rechercher par ID partiel
          whereCondition.id = { contains: searchTerm, mode: 'insensitive' };
        }
      }

      const patients = await this.prisma.patients.findMany({
        where: whereCondition,
        take: 20, // Limiter les résultats
        orderBy: { cin: 'asc' }
      });

      return patients.map(patient => ({
        id: patient.id,
        name: patient.cin ? `Patient CIN: ${patient.cin}` : `Patient ID: ${patient.id.substring(0, 8)}`,
        cin: patient.cin,
      } as PatientInfo));
    } catch (error) {
      this.logger.error('Failed to search patients', error);
      throw error;
    }
  }
}