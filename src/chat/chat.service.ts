import { Injectable, Logger, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { Message, MessageAttachment, Conversation } from '../types/chat.types'; // Conservez vos types
import { SendMessageDto, AttachmentDto } from './dto/send-message.dto'; // Import DTO

// Import pour S3 et uuid
import { S3 } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path'; // Gardé pour la structure initiale, mais S3 ne l'utilisera pas
import * as fs from 'fs'; // Optionnel si vous gardez un fallback local ou pour des tests

@Injectable()
export class ChatService {
  private readonly logger = new Logger(ChatService.name);
  private readonly s3: S3;

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {
    // Configuration S3 - À externaliser dans un module de configuration (ConfigService)
    this.s3 = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });
  }

  async validateToken(token: string): Promise<any> { // Type Doctor à définir
    try {
      const payload = this.jwtService.verify(token);

      // Le payload contient associated_data qui est les données du docteur
      // On utilise directement l'ID du docteur depuis associated_data
      const doctorId = payload.associated_data.id;

      const doctor = await this.prisma.doctors.findUnique({
        where: { id: doctorId }, // Utiliser l'ID du docteur directement
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

  async createMessage(
    senderId: string,
    data: SendMessageDto, // Utilise le DTO
  ): Promise<Message> {
    try {
      const messageData: any = {
        content: data.content,
        senderId: senderId,
        receiverId: data.receiverId,
      };

      if (data.attachments && data.attachments.length > 0) {
        messageData.attachments = {
          create: data.attachments.map(att => ({
            filename: att.filename,
            path: att.path, // Ceci est maintenant la clé S3
            mimeType: att.mimeType,
            size: parseInt(att.size, 10), // Conversion en nombre
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

      return message as Message;
    } catch (error) {
      this.logger.error('Failed to create message', error);
      throw error; // Relancez pour que le gateway/controller puisse gérer
    }
  }

  async getMessages(
    userId: string, // L'utilisateur qui fait la requête
    otherUserId: string,
    cursor?: string,
    limit: number = 20,
  ): Promise<{ messages: Message[]; hasMore: boolean; nextCursor?: string }> {
    try {
      const messages = await this.prisma.message.findMany({
        where: {
          OR: [
            { senderId: userId, receiverId: otherUserId },
            { senderId: otherUserId, receiverId: userId },
          ],
        },
        take: limit + 1, // Demande un de plus pour vérifier s'il y a "hasMore"
        skip: cursor ? 1 : 0, // Saute l'élément curseur si fourni
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: { createdAt: 'desc' },
        include: {
          attachments: true,
          sender: true, // Inclure les détails du sender
          receiver: true, // Inclure les détails du receiver
        },
      });

      const hasMore = messages.length > limit;
      const messagesToReturn = hasMore ? messages.slice(0, limit) : messages;
      const nextCursor = hasMore ? messagesToReturn[messagesToReturn.length - 1]?.id : undefined;

      // Convertir les chemins S3 en URLs signées si nécessaire ici
      for (const msg of messagesToReturn) {
        if (msg.attachments) {
          for (const att of msg.attachments) {
            // att.path est la clé S3
            // att.url = await this.getSignedUrlForAttachment(att.path); // Méthode à créer
          }
        }
      }


      return {
        messages: messagesToReturn as Message[],
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
      if (messageToUpdate.isRead) return messageToUpdate as Message; // Déjà lu

      const message = await this.prisma.message.update({
        where: { id: messageId },
        data: { isRead: true },
        include: {
          attachments: true,
          sender: true,
          receiver: true,
        },
      });
      return message as Message;
    } catch (error) {
      this.logger.error(`Failed to mark message ${messageId} as read`, error);
      throw error;
    }
  }

  async getConversations(doctorId: string): Promise<Conversation[]> {
    this.logger.log(`Getting conversations for doctor ${doctorId}`);
    try {
      // Requête SQL améliorée pour PostgresQL
      // Utilise ROW_NUMBER() pour obtenir le dernier message et calcule les non-lus
      const conversationsQuery = `
          WITH UserMessages AS (
              SELECT
                  m.id AS message_id,
                  m."content",
                  m."createdAt",
                  m."senderId",
                  m."receiverId",
                  m."isRead",
                  CASE
                      WHEN m."senderId" = $1 THEN m."receiverId"
                      ELSE m."senderId"
                      END AS partner_id,
                  ROW_NUMBER() OVER(PARTITION BY CASE WHEN m."senderId" = $1 THEN m."receiverId" ELSE m."senderId" END ORDER BY m."createdAt" DESC) as rn
              FROM "Message" m
              WHERE m."senderId" = $1 OR m."receiverId" = $1
          ),
               LatestMessages AS (
                   SELECT * FROM UserMessages WHERE rn = 1
               ),
               UnreadCounts AS (
                   SELECT
                       "senderId" as partner_id,
                       COUNT(*) as unread_count
                   FROM "Message"
                   WHERE "receiverId" = $1 AND "isRead" = FALSE
                   GROUP BY "senderId"
               )
          SELECT
              d.id as "doctorId",
              d.first_name,
              d.last_name,
              d.specialty,
              d.profile_image,
              d.type,
              d.is_license_verified,
              d.bio,
              d.education,
              d.experience,
              d.languages,
              d.user_id,
              lm.content as "lastMessageContent",
              lm."createdAt" as "lastMessageDate",
              lm."isRead" as "lastMessageIsRead",
              lm."senderId" as "lastMessageSenderId",
              COALESCE(uc.unread_count, 0) as "unreadCount"
          FROM doctors d
                   JOIN LatestMessages lm ON d.id = lm.partner_id
                   LEFT JOIN UnreadCounts uc ON d.id = uc.partner_id
          WHERE d.id != $1
          ORDER BY lm."createdAt" DESC;
      `;

      const result = await this.prisma.$queryRawUnsafe(conversationsQuery, doctorId) as any[];

      return result.map(conv => ({
        id: conv.doctorId, // ID de la conversation (ou du partenaire)
        doctor: {
          id: conv.doctorId,
          type: conv.type,
          is_license_verified: conv.is_license_verified,
          bio: conv.bio,
          education: conv.education || [],
          experience: conv.experience || [],
          first_name: conv.first_name,
          languages: conv.languages || [],
          last_name: conv.last_name,
          profile_image: conv.profile_image, // Potentiellement à transformer en URL signée S3
          specialty: conv.specialty,
          user_id: conv.user_id,
        },
        lastMessage: conv.lastMessageContent ? {
          id: conv.message_id, // Assurez-vous que message_id est sélectionné si besoin
          content: conv.lastMessageContent,
          createdAt: conv.lastMessageDate,
          isRead: conv.lastMessageSenderId === doctorId ? true : conv.lastMessageIsRead, // Si je suis l'expéditeur du dernier message, il est "lu" de mon point de vue
          senderId: conv.lastMessageSenderId,
        } : undefined,
        unreadCount: Number(conv.unreadCount) || 0,
      }));
    } catch (error) {
      this.logger.error(`Failed to get conversations for doctor ${doctorId}`, error);
      throw error;
    }
  }

  async deleteMessage(messageId: string, doctorId: string): Promise<Message> {
    try {
      const message = await this.prisma.message.findUnique({
        where: { id: messageId },
      });

      if (!message) {
        throw new NotFoundException('Message not found');
      }
      // Logique de suppression : permettre seulement au sender de supprimer pour tout le monde,
      // ou une suppression "soft" (deletedForUser)
      if (message.senderId !== doctorId) {
        throw new UnauthorizedException('You can only delete your own messages.');
      }

      // TODO: Supprimer les pièces jointes de S3 si elles existent
      // const attachments = await this.prisma.messageAttachment.findMany({ where: { messageId }});
      // for (const att of attachments) { await this.deleteAttachmentFromS3(att.path); }

      const deletedMessage = await this.prisma.message.delete({
        where: { id: messageId },
        include: { attachments: true, sender: true, receiver: true },
      });
      return deletedMessage as Message;
    } catch (error) {
      this.logger.error('Failed to delete message', error);
      throw error;
    }
  }

  async uploadAttachment(file: Express.Multer.File): Promise<AttachmentDto> {
    const filenameInS3 = `${uuidv4()}-${file.originalname}`;
    const s3Key = `chat-attachments/${filenameInS3}`;

    try {
      await this.s3.putObject({
        Bucket: process.env.AWS_S3_BUCKET_NAME!,
        Key: s3Key,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: 'private', // Important pour la confidentialité
      }).promise();

      return {
        filename: file.originalname,
        path: s3Key, // Clé S3
        mimeType: file.mimetype,
        size: file.size.toString(),
      };
    } catch (error) {
      this.logger.error(`Failed to upload attachment ${file.originalname} to S3`, error);
      throw new Error(`Failed to upload attachment: ${error.message}`);
    }
  }

  // Méthode pour obtenir une URL signée (à appeler avant d'envoyer les messages/conversations au client)
  async getSignedUrlForAttachment(s3Key: string): Promise<string> {
    try {
      return await this.s3.getSignedUrlPromise('getObject', {
        Bucket: process.env.AWS_S3_BUCKET_NAME!,
        Key: s3Key,
        Expires: 60 * 60, // URL valide pour 1 heure
      });
    } catch (error) {
      this.logger.error(`Failed to get signed URL for ${s3Key}`, error);
      return ''; // Ou gérer l'erreur autrement
    }
  }

  // async deleteAttachmentFromS3(s3Key: string): Promise<void> { ... }
}