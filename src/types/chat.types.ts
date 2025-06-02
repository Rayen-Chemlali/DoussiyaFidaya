// src/types/chat.types.ts

export interface MessageAttachment {
  id: string;
  filename: string;
  path: string; // S3 key
  mimeType: string;
  size: number; // Should be number
  url?: string; // Signed URL for client
  createdAt: Date;
  messageId?: string; // Optional to match Prisma model
}

// Basic Doctor Info (subset of Prisma's doctors model for embedding)
export interface Doctor {
  id: string;
  first_name: string;
  last_name: string;
  profile_image?: string | null;
  specialty?: string | null; // Or your doctors_specialty_enum type
  type: any; // Replace 'any' with your actual enum type if available (e.g., doctors_type_enum)
  is_license_verified: boolean;
  bio?: string | null;
  education: string[];
  experience: string[];
  languages: string[];
  user_id: string;
}

export interface PatientInfo {
  id: string; // This will be the patient's UUID from the Message.patientId
  name: string; // This will be constructed, e.g., "Patient CIN: [CIN]" or "Patient ID: [ID]"
}

// Message structure (ensure it matches Prisma + patientId + attachment URLs)
export interface Message {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  senderId: string;
  receiverId: string;
  patientId: string; // Added patientId, non-optional for these conversations
  isRead: boolean;
  sender?: Doctor; // Embed sender details
  receiver?: Doctor; // Embed receiver details
  attachments?: MessageAttachment[];
}

// Define PatientCentricConversation here
export interface PatientCentricConversation {
  id: string; // Composite ID: e.g., `${partnerDoctorId}-${patientId}`
  partnerDoctor: Doctor;
  patient: PatientInfo;
  lastMessage?: Message;
  unreadCount: number;
}
export interface DoctorCentricConversation {
  id: string;
  partnerDoctor: Doctor;
  patients: Array<{
    id: string;
    name: string;
    messageCount: number;
    lastActivity: Date;
  }>;
  lastMessage: Message;
  unreadCount: number;
  totalMessageCount: number;
}