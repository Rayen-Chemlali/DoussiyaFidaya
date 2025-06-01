// src/chat/dto/send-message.dto.ts
import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsOptional, IsArray, MaxLength, ValidateNested, IsUUID } from 'class-validator';

export class AttachmentDto {
  @IsString()
  @IsNotEmpty()
  filename: string;

  @IsString()
  @IsNotEmpty()
  path: string; // S3 key or path

  @IsString()
  @IsNotEmpty()
  mimeType: string;

  @IsString() // Prisma attend un Int, mais les données de formulaire peuvent venir en string
  @IsNotEmpty()
  size: string; // Sera converti en nombre dans le service
}

export class SendMessageDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  receiverId: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(5000)
  content: string;

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => AttachmentDto)
  attachments?: AttachmentDto[];
}