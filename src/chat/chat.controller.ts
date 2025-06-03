import {
  Controller, Get, Post, Body, Param, UseGuards, Req, Query,
  UploadedFiles, UseInterceptors, ParseUUIDPipe, ParseIntPipe, DefaultValuePipe,
  BadRequestException, Delete, HttpCode, HttpStatus,
  Res
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import {
  Message,
  PatientCentricConversation,
  DoctorCentricConversation,
  Doctor,
  PatientInfo
} from '../types/chat.types';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { SendMessageDto, AttachmentDto } from './dto/send-message.dto';
import { ChatService } from './chat.service';
import { Response } from 'express';

@Controller('chat')
@UseGuards(JwtAuthGuard)
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('messages')
  async createMessageViaHttp(
    @Req() req,
    @Body() data: SendMessageDto,
  ): Promise<Message> {
    const senderId = req.user.associated_id || req.user.associated_data?.id;
    if (!senderId) {
      throw new BadRequestException('Doctor ID not found in token');
    }
    return this.chatService.createMessage(senderId, data);
  }

  @Post('messages/:messageId/read')
  async markMessageAsReadViaHttp(
    @Req() req,
    @Param('messageId', ParseUUIDPipe) messageId: string,
  ): Promise<Message> {
    const readerId = req.user.associated_id || req.user.associated_data?.id;
    if (!readerId) {
      throw new BadRequestException('Doctor ID not found in token');
    }
    return this.chatService.markMessageAsRead(messageId, readerId);
  }

  @Delete('messages/:messageId')
  @HttpCode(HttpStatus.OK)
  async deleteMessageViaHttp(
    @Req() req,
    @Param('messageId', ParseUUIDPipe) messageId: string,
  ): Promise<{ message: string, deletedMessageId: string }> {
    const doctorId = req.user.associated_id || req.user.associated_data?.id;
    if (!doctorId) {
      throw new BadRequestException('Doctor ID not found in token');
    }
    await this.chatService.deleteMessage(messageId, doctorId);
    return {
      message: 'Message deleted successfully',
      deletedMessageId: messageId
    };
  }



  @Get('conversations/sender')
  async getMessagesByDoctorSenderId(@Req() req): Promise<{
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
    const doctorSenderId = req.user.associated_id || req.user.associated_data?.id;
    if (!doctorSenderId) {
      throw new BadRequestException('Doctor ID not found in token');
    }
    return this.chatService.getMessagesByDoctorSenderId(doctorSenderId);
  }

  @Get('conversations/verify/:patientId/:doctorReceiverId')
  async verifyIfExistConv(
    @Req() req,
    @Param('patientId', ParseUUIDPipe) patientId: string,
    @Param('doctorReceiverId', ParseUUIDPipe) doctorReceiverId: string,
  ): Promise<{ exists: boolean }> {
    const doctorSenderId = req.user.associated_id || req.user.associated_data?.id;
    if (!doctorSenderId) {
      throw new BadRequestException('Doctor ID not found in token');
    }

    const exists = await this.chatService.verifyIfExistConv(patientId, doctorSenderId, doctorReceiverId);
    return { exists };
  }


  @Get('conversations/:patientId/:doctorReceiverId')
  async getConvByDoctorSenderId(
    @Req() req,
    @Param('patientId', ParseUUIDPipe) patientId: string,
    @Param('doctorReceiverId', ParseUUIDPipe) doctorReceiverId: string,
    @Query('cursor') cursor?: string,
    @Query('limit', new DefaultValuePipe(50), ParseIntPipe) limit?: number,
  ): Promise<{
    messages: Message[];
    hasMore: boolean;
    nextCursor?: string;
    patient: any;
    receiver: any;
  }> {
    const doctorSenderId = req.user.associated_id || req.user.associated_data?.id;
    if (!doctorSenderId) {
      throw new BadRequestException('Doctor ID not found in token');
    }

    return this.chatService.getConvByDoctorSenderId(
      patientId,
      doctorSenderId,
      doctorReceiverId,
      cursor,
      limit
    );
  }


  @Post('upload-local')
  @UseInterceptors(FilesInterceptor('files', 10))
  async uploadMultipleFilesLocal(
    @UploadedFiles() files: Array<Express.Multer.File>,
  ): Promise<{ files: AttachmentDto[] }> {
    if (!files || files.length === 0) {
      throw new BadRequestException('No files uploaded.');
    }
    const uploadedAttachments = await this.chatService.uploadAttachmentsLocal(files);
    return { files: uploadedAttachments };
  }

  @Get('download/:attachmentId')
  async downloadAttachment(
    @Param('attachmentId', ParseUUIDPipe) attachmentId: string,
    @Res() res: Response,
  ): Promise<void> {
    try {
      const { filePath, filename, mimeType } = await this.chatService.getAttachmentById(attachmentId);

      res.setHeader('Content-Type', mimeType);
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

      const fs = require('fs');
      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res);
    } catch (error) {
      if (error.status === 404) {
        res.status(404).json({ message: 'File not found' });
      } else {
        res.status(500).json({ message: 'Error downloading file' });
      }
    }
  }
}
