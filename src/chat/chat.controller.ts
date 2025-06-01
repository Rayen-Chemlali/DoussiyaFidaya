import {
  Controller, Get, Post, Body, Param, UseGuards, Req, Query,
  UploadedFile, UseInterceptors, ParseUUIDPipe, ParseIntPipe, DefaultValuePipe,
  BadRequestException
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ChatService } from './chat.service';
import { Message } from '../types/chat.types'; // Conservez vos types
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'; // Assurez-vous que ce guard existe et fonctionne
import { SendMessageDto, AttachmentDto } from './dto/send-message.dto'; // Import DTO

@Controller('chat')
@UseGuards(JwtAuthGuard) // Applique la garde JWT à toutes les routes de ce contrôleur
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('messages')
  async createMessageViaHttp(
    @Req() req, // req.user sera populé par JwtAuthGuard
    @Body() data: SendMessageDto, // Utilise le DTO pour la validation
  ): Promise<Message> {
    const senderId = req.user.id; // Assurez-vous que req.user.id est bien l'ID du docteur
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
    @Query('doctorId', ParseUUIDPipe) otherDoctorId: string, // Renommé pour clarté, et validé comme UUID
    @Query('cursor') cursor?: string, // Optionnel
    @Query('limit', new DefaultValuePipe(20), ParseIntPipe) limit?: number,
  ) {
    const userId = req.user.id;
    return this.chatService.getMessages(
      userId,
      otherDoctorId,
      cursor,
      limit,
    );
  }

  @Get('conversations')
  async getConversationsViaHttp(@Req() req) {
    const doctorId = req.user.id;
    const conversations = await this.chatService.getConversations(doctorId);

    // Pour chaque conversation et chaque pièce jointe du dernier message, générer une URL signée
    // Ceci est un exemple, à adapter selon la structure exacte et si les URLs sont nécessaires ici
    // for (const conv of conversations) {
    //   if (conv.doctor.profile_image && conv.doctor.profile_image.startsWith('s3key:')) { // Supposons un préfixe pour les clés S3
    //     conv.doctor.profile_image = await this.chatService.getSignedUrlForAttachment(conv.doctor.profile_image.replace('s3key:', ''));
    //   }
    //   if (conv.lastMessage?.attachments) {
    //     for (const att of conv.lastMessage.attachments) {
    //       att.url = await this.chatService.getSignedUrlForAttachment(att.path);
    //     }
    //   }
    // }
    return conversations;
  }

  @Post('messages/:messageId/delete') // Devrait être HTTP DELETE, mais Post est ok si vous préférez
  async deleteMessageViaHttp(
    @Req() req,
    @Param('messageId', ParseUUIDPipe) messageId: string,
  ): Promise<Message> { // Ou retourner un statut de succès
    const doctorId = req.user.id;
    return this.chatService.deleteMessage(messageId, doctorId);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file')) // 'file' est le nom du champ dans FormData
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<AttachmentDto> { // Retourne directement les métadonnées attendues par createMessage
    if (!file) {
      throw new BadRequestException('No file uploaded.');
    }
    // Le fichier est déjà géré par Multer (stocké en mémoire ou temporairement sur disque)
    // Le service se chargera de l'envoyer vers S3
    return this.chatService.uploadAttachment(file);
  }
}