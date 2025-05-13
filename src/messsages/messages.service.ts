import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not, In } from 'typeorm';
import { ChatRoom, Message, MessageAttachment, MessageStatus, UserChatRoomStatus } from './entities/message.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
    @InjectRepository(ChatRoom)
    private chatRoomRepository: Repository<ChatRoom>,
    @InjectRepository(UserChatRoomStatus)
    private userChatRoomStatusRepository: Repository<UserChatRoomStatus>,
    @InjectRepository(MessageAttachment)
    private messageAttachmentRepository: Repository<MessageAttachment>,
  ) {}

  async createMessage(senderId: string, roomId: string, content: string, attachments?: Express.Multer.File[]): Promise<Message> {
    const chatRoom = await this.chatRoomRepository.findOne({
      where: { id: roomId },
      relations: ['participants'],
    });

    if (!chatRoom) {
      throw new Error('Chat room not found');
    }

    const sender = chatRoom.participants.find(user => user.id === senderId);
    if (!sender) {
      throw new Error('User is not a participant in this chat room');
    }

    const message = this.messageRepository.create({
      content,
      sender,
      chat_room: chatRoom,
      status: MessageStatus.SENT,
    });

    const savedMessage = await this.messageRepository.save(message);

    // Gestion des pièces jointes si présentes
    if (attachments && attachments.length > 0) {
      const messageAttachments = attachments.map(file => {
        return this.messageAttachmentRepository.create({
          file_name: file.originalname,
          file_path: `/uploads/messages/${savedMessage.id}/${file.filename}`,
          mime_type: file.mimetype,
          file_size: file.size,
          message: savedMessage,
        });
      });

      await this.messageAttachmentRepository.save(messageAttachments);
      savedMessage.attachments = messageAttachments;
    }

    return savedMessage;
  }

  async updateMessageStatus(messageId: string, userId: string, status: MessageStatus): Promise<Message> {
    const message = await this.messageRepository.findOne({
      where: { id: messageId },
      relations: ['chat_room', 'chat_room.participants'],
    });

    if (!message) {
      throw new Error('Message not found');
    }

    // Vérifier que l'utilisateur est bien un participant de la conversation
    const isParticipant = message.chat_room.participants.some(participant => participant.id === userId);
    if (!isParticipant) {
      throw new Error('User is not a participant in this chat room');
    }

    // Ne pas permettre au sender de marquer ses propres messages comme vus
    if (status === MessageStatus.SEEN && message.sender.id === userId) {
      throw new Error('Cannot mark your own message as seen');
    }

    message.status = status;
    return this.messageRepository.save(message);
  }

  async getChatRoomMessages(roomId: string, page = 1, limit = 50): Promise<Message[]> {
    const skip = (page - 1) * limit;

    return this.messageRepository.find({
      where: { chat_room: { id: roomId } },
      relations: ['sender', 'attachments'],
      order: { created_at: 'DESC' },
      skip,
      take: limit,
    });
  }

  async getUserChatRooms(userId: string): Promise<ChatRoom[]> {
    return this.chatRoomRepository.find({
      where: { participants: { id: userId } },
      relations: ['participants'],
    });
  }

  async createChatRoom(name: string | null, isGroup: boolean, participantIds: string[]): Promise<ChatRoom> {
    // Vérifier s'il existe déjà une conversation entre exactement ces participants (pour les conversations privées)
    if (!isGroup && participantIds.length === 2) {
      const existingRoom = await this.chatRoomRepository
        .createQueryBuilder('room')
        .leftJoin('room.participants', 'participant')
        .where('room.is_group = :isGroup', { isGroup: false })
        .andWhere('participant.id IN (:...participantIds)', { participantIds })
        .groupBy('room.id')
        .having('COUNT(DISTINCT participant.id) = :count', { count: participantIds.length })
        .getOne();

      if (existingRoom) {
        return existingRoom;
      }
    }

    // Si la room n'existe pas, on la crée
    const chatRoom = this.chatRoomRepository.create({
      name: isGroup ? name : null,
      is_group: isGroup,
    });

    // Ajouter les participants
    chatRoom.participants = participantIds.map(id => ({ id } as User));

    return this.chatRoomRepository.save(chatRoom);
  }

  async getUnreadMessagesCount(userId: string): Promise<{ roomId: string; count: number }[]> {
    const userChatRoomStatus = await this.userChatRoomStatusRepository.find({
      where: { user: { id: userId } },
      relations: ['chat_room'],
    });

    const result: { roomId: string; count: number }[] = [];

    for (const status of userChatRoomStatus) {
      const count = await this.messageRepository.count({
        where: {
          chat_room: { id: status.chat_room.id },
          sender: { id: Not(userId) },
          created_at: status.last_read ? new Date(status.last_read) : undefined,
        },
      });

      result.push({
        roomId: status.chat_room.id,
        count,
      });
    }

    return result;
  }

  async markMessagesAsDelivered(userId: string, roomId: string): Promise<void> {
    const messages = await this.messageRepository.find({
      where: {
        chat_room: { id: roomId },
        sender: { id: Not(userId) },
        status: MessageStatus.SENT,
      },
    });

    if (messages.length > 0) {
      await this.messageRepository.update(
        messages.map(m => m.id),
        { status: MessageStatus.DELIVERED },
      );
    }
  }

  async markMessagesAsSeen(userId: string, roomId: string): Promise<void> {
    // Mettre à jour la date du dernier message lu
    await this.userChatRoomStatusRepository.update(
      { user: { id: userId }, chat_room: { id: roomId } },
      { last_read: new Date() },
    );

    // Marquer tous les messages comme vus
    const messages = await this.messageRepository.find({
      where: {
        chat_room: { id: roomId },
        sender: { id: Not(userId) },
        status: In([MessageStatus.SENT, MessageStatus.DELIVERED]),
      },
    });

    if (messages.length > 0) {
      await this.messageRepository.update(
        messages.map(m => m.id),
        { status: MessageStatus.SEEN },
      );
    }
  }

  async updateUserConnectionStatus(userId: string, isConnected: boolean): Promise<void> {
    await this.userChatRoomStatusRepository.update(
      { user: { id: userId } },
      {
        is_connected: isConnected,
        last_online: isConnected ? null : new Date(),
      },
    );
  }

  async getMessagesAfter(roomId: string, userId: string, timestamp: Date): Promise<Message[]> {
    return this.messageRepository.find({
      where: {
        chat_room: { id: roomId },
        created_at: timestamp ? new Date(timestamp) : undefined,
      },
      relations: ['sender', 'attachments'],
      order: { created_at: 'ASC' },
    });
  }
}