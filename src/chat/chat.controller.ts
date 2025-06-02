import {
  Controller, Get, Post, Body, Param, UseGuards, Req, Query,
  UploadedFiles, UseInterceptors, ParseUUIDPipe, ParseIntPipe, DefaultValuePipe,
  BadRequestException, Delete, HttpCode, HttpStatus
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ChatService } from './chat.service';
import {
  Message,
  PatientCentricConversation,
  DoctorCentricConversation,
  Doctor,
  PatientInfo
} from '../types/chat.types';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { SendMessageDto, AttachmentDto } from './dto/send-message.dto';

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


  @Get('messages')
  async getMessagesViaHttp(
    @Req() req,
    @Query('doctorId', ParseUUIDPipe) otherDoctorId: string,
    @Query('patientId', ParseUUIDPipe) patientId: string,
    @Query('cursor') cursor?: string,
    @Query('limit', new DefaultValuePipe(20), ParseIntPipe) limit?: number,
  ) {
    const userId = req.user.associated_id || req.user.associated_data?.id;
    if (!userId) {
      throw new BadRequestException('Doctor ID not found in token');
    }
    if (!patientId) {
      throw new BadRequestException('Patient ID is required.');
    }
    return this.chatService.getMessages(
      userId,
      otherDoctorId,
      patientId,
      cursor,
      limit,
    );
  }

  @Get('conversations/patient-centric')
  async getPatientCentricConversations(@Req() req): Promise<PatientCentricConversation[]> {
    const doctorId = req.user.associated_id || req.user.associated_data?.id;
    if (!doctorId) {
      throw new BadRequestException('Doctor ID not found in token');
    }
    return this.chatService.getPatientCentricConversations(doctorId);
  }

  @Get('conversations/doctor-centric')
  async getDoctorCentricConversations(@Req() req): Promise<DoctorCentricConversation[]> {
    const doctorId = req.user.associated_id || req.user.associated_data?.id;
    if (!doctorId) {
      throw new BadRequestException('Doctor ID not found in token');
    }
    return this.chatService.getDoctorCentricConversations(doctorId);
  }


  @Get('conversations')
  async getConversationsViaHttp(@Req() req): Promise<PatientCentricConversation[]> {
    const doctorId = req.user.associated_id || req.user.associated_data?.id;
    if (!doctorId) {
      throw new BadRequestException('Doctor ID not found in token');
    }
    return this.chatService.getPatientCentricConversations(doctorId);
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


  @Post('upload')
  @UseInterceptors(FilesInterceptor('files', 10)) // 'files' est le nom du champ, 10 max
  async uploadMultipleFiles(
    @UploadedFiles() files: Array<Express.Multer.File>,
  ): Promise<{ files: AttachmentDto[] }> {
    if (!files || files.length === 0) {
      throw new BadRequestException('No files uploaded.');
    }
    const uploadedAttachments = await this.chatService.uploadAttachments(files);
    return { files: uploadedAttachments };
  }


  @Get('doctors/search')
  async searchDoctors(
    @Req() req,
    @Query('term') searchTerm?: string,
  ): Promise<{ doctors: Doctor[] }> {
    const currentDoctorId = req.user.associated_id || req.user.associated_data?.id;
    if (!currentDoctorId) {
      throw new BadRequestException('Doctor ID not found in token');
    }
    const doctors = await this.chatService.searchDoctors(currentDoctorId, searchTerm);
    return { doctors };
  }


  @Get('patients/search')
  async searchPatients(
    @Query('term') searchTerm?: string,
  ): Promise<{ patients: PatientInfo[] }> {
    const patients = await this.chatService.searchPatients(searchTerm);
    return { patients };
  }

  @Get('doctors/:doctorId')
  async getDoctorDetails(
    @Param('doctorId', ParseUUIDPipe) doctorId: string,
  ): Promise<Doctor> {
    // Rechercher le docteur spécifique en excluant le docteur actuel
    const doctors = await this.chatService.searchDoctors('00000000-0000-0000-0000-000000000000', '');
    const doctor = doctors.find(d => d.id === doctorId);
    if (!doctor) {
      throw new BadRequestException('Doctor not found');
    }
    return doctor;
  }

  @Get('patients/:patientId')
  async getPatientDetails(
    @Param('patientId', ParseUUIDPipe) patientId: string,
  ): Promise<PatientInfo> {
    const patients = await this.chatService.searchPatients(patientId);
    const patient = patients.find(p => p.id === patientId);
    if (!patient) {
      throw new BadRequestException('Patient not found');
    }
    return patient;
  }


  @Get('stats')
  async getConversationStats(@Req() req): Promise<{
    totalConversations: number;
    unreadMessages: number;
    activePatients: number;
    totalMessages: number;
  }> {
    const doctorId = req.user.associated_id || req.user.associated_data?.id;
    if (!doctorId) {
      throw new BadRequestException('Doctor ID not found in token');
    }

    const [patientCentric, doctorCentric] = await Promise.all([
      this.chatService.getPatientCentricConversations(doctorId),
      this.chatService.getDoctorCentricConversations(doctorId)
    ]);

    const totalConversations = patientCentric.length;
    const unreadMessages = patientCentric.reduce((sum, conv) => sum + conv.unreadCount, 0);
    const activePatients = new Set(patientCentric.map(conv => conv.patient.id)).size;
    const totalMessages = doctorCentric.reduce((sum, conv) => sum + conv.totalMessageCount, 0);

    return {
      totalConversations,
      unreadMessages,
      activePatients,
      totalMessages
    };
  }
}