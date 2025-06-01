import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsOptional, IsArray, MaxLength, ValidateNested, IsUUID } from 'class-validator';

export class AttachmentDto {
  @IsString()
  @IsNotEmpty()
  filename: string;

  @IsString()
  @IsNotEmpty()
  path: string;

  @IsString()
  @IsNotEmpty()
  mimeType: string;

  @IsString()
  @IsNotEmpty()
  size: string;
}

export class SendMessageDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  receiverId: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  patientId: string;

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