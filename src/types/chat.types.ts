import { doctors } from '@prisma/client';

export interface Message {
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  createdAt: Date;
  isRead: boolean;
  attachments?: MessageAttachment[];
  sender?: doctors;
  receiver?: doctors;
}

export interface MessageAttachment {
  id: string;
  filename: string;
  path: string;
  mimeType: string;
  size: number;
  messageId: string;
  createdAt: Date;
}

export interface Doctor {
  id: string;
  firstName: string;
  lastName: string;
  specialty: string;
  profileImage?: string;
}

export interface Conversation {
  id: string;
  doctor: doctors;
  lastMessage?: {
    content: string;
    createdAt: Date;
    isRead: boolean;
  };
  unreadCount: number;
}