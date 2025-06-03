import { Injectable, Logger, NotFoundException, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { Message, Doctor, PatientInfo, PatientCentricConversation, DoctorCentricConversation, MessageAttachment } from '../types/chat.types';
import { SendMessageDto, AttachmentDto } from './dto/send-message.dto';
import { S3 } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';

const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);
@Injectable()
export class ChatService {
  private readonly logger = new Logger(ChatService.name);
  private readonly s3: S3;

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {

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

      return typedMessage;
    } catch (error) {
      this.logger.error(`Failed to mark message ${messageId} as read`, error);
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




  async getMessagesByDoctorSenderId(doctorSenderId: string): Promise<{
    conversations: Array<{
      patientId: string;
      doctorReceiverId: string;
      patient: any;
      receiver: any;
      lastMessage: Message;
      unreadCount: number;
      totalMessages: number;
    }>
  }> {
    try {
      const allMessages = await this.prisma.message.findMany({
        where: {
          patientId: { not: null },
          OR: [
            { senderId: doctorSenderId },
            { receiverId: doctorSenderId }
          ]
        },
        select: {
          patientId: true,
          senderId: true,
          receiverId: true
        }
      });

      const conversationsSet = new Set<string>();
      const conversationsData: Array<{
        patientId: string;
        otherDoctorId: string;
      }> = [];

      for (const message of allMessages) {
        if (!message.patientId) continue;

        const otherDoctorId = message.senderId === doctorSenderId
          ? message.receiverId
          : message.senderId;

        const conversationKey = `${message.patientId}-${otherDoctorId}`;

        if (!conversationsSet.has(conversationKey)) {
          conversationsSet.add(conversationKey);
          conversationsData.push({
            patientId: message.patientId,
            otherDoctorId: otherDoctorId
          });
        }
      }

      const result: Array<{
        patientId: string;
        doctorReceiverId: string;
        patient: any;
        receiver: any;
        lastMessage: Message;
        unreadCount: number;
        totalMessages: number;
      }> = [];

      for (const conv of conversationsData) {
        const lastMessage = await this.prisma.message.findFirst({
          where: {
            patientId: conv.patientId,
            OR: [
              { senderId: doctorSenderId, receiverId: conv.otherDoctorId },
              { senderId: conv.otherDoctorId, receiverId: doctorSenderId }
            ]
          },
          orderBy: { createdAt: 'desc' },
          include: {
            attachments: true,
            sender: true,
            receiver: true
          }
        });

        const unreadCount = await this.prisma.message.count({
          where: {
            patientId: conv.patientId,
            senderId: conv.otherDoctorId,
            receiverId: doctorSenderId,
            isRead: false
          }
        });

        const totalMessages = await this.prisma.message.count({
          where: {
            patientId: conv.patientId,
            OR: [
              { senderId: doctorSenderId, receiverId: conv.otherDoctorId },
              { senderId: conv.otherDoctorId, receiverId: doctorSenderId }
            ]
          }
        });

        const patient = await this.prisma.patients.findUnique({
          where: { id: conv.patientId },
          include: { users: true }
        });

        const receiver = await this.prisma.doctors.findUnique({
          where: { id: conv.otherDoctorId },
          include: { users: true }
        });

        if (lastMessage && patient && receiver) {
          const processedMessage = lastMessage as Message;
          if (processedMessage.attachments) {
            for (const att of processedMessage.attachments) {
              if (att.path) {
                (att as any).url = `/api/chat/download/${att.id}`;
              }
            }
          }

          result.push({
            patientId: conv.patientId,
            doctorReceiverId: conv.otherDoctorId,
            patient,
            receiver,
            lastMessage: processedMessage,
            unreadCount,
            totalMessages
          });
        }
      }

      result.sort((a, b) => new Date(b.lastMessage.createdAt).getTime() - new Date(a.lastMessage.createdAt).getTime());

      return { conversations: result };
    } catch (error) {
      this.logger.error(`Failed to get conversations for doctor ${doctorSenderId}`, error);
      throw error;
    }
  }


  async verifyIfExistConv(patientId: string, doctorSenderId: string, doctorReceiverId: string): Promise<boolean> {
    try {
      const messageExists = await this.prisma.message.findFirst({
        where: {
          patientId: patientId,
          OR: [
            { senderId: doctorSenderId, receiverId: doctorReceiverId },
            { senderId: doctorReceiverId, receiverId: doctorSenderId }
          ]
        }
      });

      return !!messageExists;
    } catch (error) {
      this.logger.error(`Failed to verify conversation existence`, error);
      throw error;
    }
  }


  async getConvByDoctorSenderId(
    patientId: string,
    doctorSenderId: string,
    doctorReceiverId: string,
    cursor?: string,
    limit: number = 50
  ): Promise<{
    messages: Message[];
    hasMore: boolean;
    nextCursor?: string;
    patient: any;
    receiver: any;
  }> {
    try {

      const conversationExists = await this.verifyIfExistConv(patientId, doctorSenderId, doctorReceiverId);
      if (!conversationExists) {
        throw new NotFoundException('Conversation not found');
      }

      const messagesFromDb = await this.prisma.message.findMany({
        where: {
          patientId: patientId,
          OR: [
            { senderId: doctorSenderId, receiverId: doctorReceiverId },
            { senderId: doctorReceiverId, receiverId: doctorSenderId }
          ]
        },
        take: limit + 1,
        skip: cursor ? 1 : 0,
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: { createdAt: 'desc' },
        include: {
          attachments: true,
          sender: true,
          receiver: true
        }
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
                (att as any).url = `/api/chat/download/${att.id}`;
              }
            }
          }
          return typedMsg;
        })
      );

      const patient = await this.prisma.patients.findUnique({
        where: { id: patientId },
        include: { users: true }
      });

      const receiver = await this.prisma.doctors.findUnique({
        where: { id: doctorReceiverId },
        include: { users: true }
      });

      return {
        messages: processedMessages.reverse(), // Ordre chronologique
        hasMore,
        nextCursor,
        patient,
        receiver
      };
    } catch (error) {
      this.logger.error(`Failed to get conversation`, error);
      throw error;
    }
  }


  async uploadAttachmentsLocal(files: Array<Express.Multer.File>): Promise<AttachmentDto[]> {
    if (!files || files.length === 0) {
      throw new BadRequestException('No files uploaded.');
    }

    const uploadDir = path.join(process.cwd(), 'uploads', 'chat-attachments');

    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (error) {
    }

    const uploadPromises = files.map(async (file) => {
      const filename = `${uuidv4()}-${file.originalname}`;
      const filePath = path.join(uploadDir, filename);
      const relativePath = path.join('uploads', 'chat-attachments', filename);

      try {
        await writeFile(filePath, file.buffer);

        return {
          filename: file.originalname,
          path: relativePath,
          mimeType: file.mimetype,
          size: file.size.toString(),
        };
      } catch (error) {
        this.logger.error(`Failed to upload attachment ${file.originalname}`, error);
        throw new Error(`Failed to upload attachment ${file.originalname}: ${error.message}`);
      }
    });

    return Promise.all(uploadPromises);
  }

  async getAttachmentById(attachmentId: string): Promise<{ filePath: string; filename: string; mimeType: string }> {
    try {
      const attachment = await this.prisma.messageAttachment.findUnique({
        where: { id: attachmentId }
      });

      if (!attachment) {
        throw new NotFoundException('Attachment not found');
      }

      const fullPath = path.join(process.cwd(), attachment.path);

      if (!fs.existsSync(fullPath)) {
        throw new NotFoundException('File not found on server');
      }

      return {
        filePath: fullPath,
        filename: attachment.filename,
        mimeType: attachment.mimeType
      };
    } catch (error) {
      this.logger.error(`Failed to get attachment ${attachmentId}`, error);
      throw error;
    }
  }
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
            // Générer l'URL de téléchargement local
            (att as any).url = `/api/chat/download/${att.id}`;
          }
        }
      }

      return typedMessage;
    } catch (error) {
      this.logger.error('Failed to create message', error);
      throw error;
    }
  }
}
