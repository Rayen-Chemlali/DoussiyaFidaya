import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  UploadedFiles,
  UseInterceptors,
  Query,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
// import { MessagesService } from './messages.service';
import { MessagesService } from './messages.service';
import { WsJwtGuard } from './guards/ws-jwt.guard';
import { WsAuthUser } from './decorators/ws-auth-user.decorator';
import { ChatRoom, Message } from './entities/message.entity';

@Controller('messages')
@UseGuards(WsJwtGuard)
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get('rooms')
  async getUserChatRooms(@WsAuthUser() user: { id: string }): Promise<ChatRoom[]> {
    return this.messagesService.getUserChatRooms(user.id);
  }

  @Get('rooms/:roomId')
  async getChatRoomMessages(
    @Param('roomId') roomId: string,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 50,
  ): Promise<Message[]> {
    return this.messagesService.getChatRoomMessages(roomId, page, limit);
  }

  @Post('rooms')
  async createChatRoom(
    @Body() data: { name: string | null; isGroup: boolean; participantIds: string[] },
  ): Promise<ChatRoom> {
    return this.messagesService.createChatRoom(data.name, data.isGroup, data.participantIds);
  }

  @Get('unread')
  async getUnreadMessagesCount(@WsAuthUser() user: { id: string }): Promise<{ roomId: string; count: number }[]> {
    return this.messagesService.getUnreadMessagesCount(user.id);
  }

  @Post('rooms/:roomId/seen')
  async markMessagesAsSeen(
    @Param('roomId') roomId: string,
    @WsAuthUser() user: { id: string },
  ): Promise<{ success: boolean }> {
    await this.messagesService.markMessagesAsSeen(user.id, roomId);
    return { success: true };
  }

  @Post('rooms/:roomId/message')
  @UseInterceptors(FilesInterceptor('attachments', 5)) // Maximum 5 pièces jointes par message
  async sendMessage(
    @Param('roomId') roomId: string,
    @Body('content') content: string,
    @UploadedFiles() attachments: Express.Multer.File[],
    @WsAuthUser() user: { id: string },
  ): Promise<Message> {
    return this.messagesService.createMessage(user.id, roomId, content, attachments);
  }
}