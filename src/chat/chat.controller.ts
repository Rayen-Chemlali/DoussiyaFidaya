import {
  Controller, Get, Post, Body, Param, UseGuards, Req, Query,
  UploadedFiles, UseInterceptors, ParseUUIDPipe, ParseIntPipe, DefaultValuePipe,
  BadRequestException, Delete, HttpCode, HttpStatus
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express'; // Changed from FileInterceptor
import { ChatService } from './chat.service'; // Import PatientCentricConversation
import { Message, PatientCentricConversation } from '../types/chat.types';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { SendMessageDto, AttachmentDto } from './dto/send-message.dto';

@Controller('chat')
@UseGuards(JwtAuthGuard)
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('messages')
  async createMessageViaHttp(
    @Req() req,
    @Body() data: SendMessageDto, // SendMessageDto now includes patientId
  ): Promise<Message> {
    const senderId = req.user.id;
    return this.chatService.createMessage(senderId, data);
  }

  @Post('messages/:messageId/read')
  async markMessageAsReadViaHttp(
    @Req() req,
    @Param('messageId', ParseUUIDPipe) messageId: string,
  ): Promise<Message> {
    const readerId = req.user.id;
    return this.chatService.markMessageAsRead(messageId, readerId);
  }

  @Get('messages')
  async getMessagesViaHttp(
    @Req() req,
    @Query('doctorId', ParseUUIDPipe) otherDoctorId: string,
    @Query('patientId', ParseUUIDPipe) patientId: string, // Added patientId
    @Query('cursor') cursor?: string,
    @Query('limit', new DefaultValuePipe(20), ParseIntPipe) limit?: number,
  ) {
    const userId = req.user.id;
    if (!patientId) {
      throw new BadRequestException('Patient ID is required.');
    }
    return this.chatService.getMessages(
      userId,
      otherDoctorId,
      patientId, // Pass patientId
      cursor,
      limit,
    );
  }

  @Get('conversations')
  async getConversationsViaHttp(@Req() req): Promise<PatientCentricConversation[]> { // Return type updated
    const doctorId = req.user.id;
    // The service now returns PatientCentricConversation[] which includes signed URLs if logic is there
    return this.chatService.getConversations(doctorId);
  }

  // Changed to HTTP DELETE and added HttpCode
  @Delete('messages/:messageId')
  @HttpCode(HttpStatus.OK) // Or HttpStatus.NO_CONTENT if you return nothing
  async deleteMessageViaHttp(
    @Req() req,
    @Param('messageId', ParseUUIDPipe) messageId: string,
  ): Promise<{ message: string, deletedMessageId: string }> { // Return type changed for clarity
    const doctorId = req.user.id;
    await this.chatService.deleteMessage(messageId, doctorId);
    return { message: 'Message deleted successfully', deletedMessageId: messageId };
  }

  // --- MODIFIED TO HANDLE MULTIPLE FILES ---
  @Post('upload')
  @UseInterceptors(FilesInterceptor('files', 10)) // 'files' is the field name, 10 is max count
  async uploadMultipleFiles(
    @UploadedFiles() files: Array<Express.Multer.File>,
  ): Promise<{ files: AttachmentDto[] }> { // Return structure changed
    if (!files || files.length === 0) {
      throw new BadRequestException('No files uploaded.');
    }
    const uploadedAttachments = await this.chatService.uploadAttachments(files);
    return { files: uploadedAttachments }; // Wrap in a 'files' key as per frontend expectation
  }
}