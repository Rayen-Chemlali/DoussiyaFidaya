import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UseGuards } from '@nestjs/common';


import { MessagesService } from './messages.service';
import { MessageStatus } from './entities/message.entity';
import { WsJwtGuard } from './guards/ws-jwt.guard';
import { WsAuthUser } from './decorators/ws-auth-user.decorator';

interface UserSocket extends Socket {
  user?: {
    id: string;
    role: string;
  };
}

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: 'chat',
})
export class MessagesGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private messagesService: MessagesService) {}

  async handleConnection(client: UserSocket) {
    // La vérification de l'authentification est gérée par le guard
  }

  async handleDisconnect(client: UserSocket) {
    if (client.user) {
      await this.messagesService.updateUserConnectionStatus(client.user.id, false);

      // Informer les autres utilisateurs de la déconnexion
      this.server.emit('userStatusChange', {
        userId: client.user.id,
        isOnline: false,
        lastOnline: new Date(),
      });
    }
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('joinRoom')
  async handleJoinRoom(
    @ConnectedSocket() client: UserSocket,
    @MessageBody() data: { roomId: string },
    @WsAuthUser() user: { id: string; role: string },
  ) {
    client.join(data.roomId);

    // Marquer les messages comme délivrés quand un utilisateur rejoint une room
    await this.messagesService.markMessagesAsDelivered(user.id, data.roomId);

    // Envoyer une notification de statut aux autres utilisateurs
    client.to(data.roomId).emit('userJoined', {
      userId: user.id,
      roomId: data.roomId,
      timestamp: new Date(),
    });

    return { status: 'success', roomId: data.roomId };
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('leaveRoom')
  async handleLeaveRoom(
    @ConnectedSocket() client: UserSocket,
    @MessageBody() data: { roomId: string },
  ) {
    client.leave(data.roomId);
    return { status: 'success', roomId: data.roomId };
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('sendMessage')
  async handleSendMessage(
    @ConnectedSocket() client: UserSocket,
    @MessageBody() data: { roomId: string; content: string; attachments?: any[] },
    @WsAuthUser() user: { id: string; role: string },
  ) {
    try {
      const message = await this.messagesService.createMessage(
        user.id,
        data.roomId,
        data.content,
        data.attachments,
      );

      // Envoyer le message à tous les utilisateurs dans la room
      this.server.to(data.roomId).emit('message', message);

      return { status: 'success', message };
    } catch (error) {
      return { status: 'error', message: error.message };
    }
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('messageDelivered')
  async handleMessageDelivered(
    @ConnectedSocket() client: UserSocket,
    @MessageBody() data: { messageId: string },
    @WsAuthUser() user: { id: string; role: string },
  ) {
    try {
      const message = await this.messagesService.updateMessageStatus(
        data.messageId,
        user.id,
        MessageStatus.DELIVERED,
      );

      // Informer les autres clients du changement de statut
      this.server.emit('messageStatusChanged', {
        messageId: data.messageId,
        status: MessageStatus.DELIVERED,
        userId: user.id,
      });

      return { status: 'success', message };
    } catch (error) {
      return { status: 'error', message: error.message };
    }
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('messageSeen')
  async handleMessageSeen(
    @ConnectedSocket() client: UserSocket,
    @MessageBody() data: { messageId: string },
    @WsAuthUser() user: { id: string; role: string },
  ) {
    try {
      const message = await this.messagesService.updateMessageStatus(
        data.messageId,
        user.id,
        MessageStatus.SEEN,
      );

      // Informer les autres clients du changement de statut
      this.server.emit('messageStatusChanged', {
        messageId: data.messageId,
        status: MessageStatus.SEEN,
        userId: user.id,
      });

      return { status: 'success', message };
    } catch (error) {
      return { status: 'error', message: error.message };
    }
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('typing')
  async handleTyping(
    @ConnectedSocket() client: UserSocket,
    @MessageBody() data: { roomId: string; isTyping: boolean },
    @WsAuthUser() user: { id: string; role: string },
  ) {
    client.to(data.roomId).emit('userTyping', {
      userId: user.id,
      roomId: data.roomId,
      isTyping: data.isTyping,
    });

    return { status: 'success' };
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('markAllAsSeen')
  async handleMarkAllAsSeen(
    @ConnectedSocket() client: UserSocket,
    @MessageBody() data: { roomId: string },
    @WsAuthUser() user: { id: string; role: string },
  ) {
    try {
      await this.messagesService.markMessagesAsSeen(user.id, data.roomId);

      // Informer les autres clients du changement de statut
      client.to(data.roomId).emit('allMessagesSeen', {
        roomId: data.roomId,
        userId: user.id,
      });

      return { status: 'success' };
    } catch (error) {
      return { status: 'error', message: error.message };
    }
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('reconnect')
  async handleReconnect(
    @ConnectedSocket() client: UserSocket,
    @MessageBody() data: { lastOnlineTimestamp: string },
    @WsAuthUser() user: { id: string; role: string },
  ) {
    // Mettre à jour le statut de connexion
    await this.messagesService.updateUserConnectionStatus(user.id, true);

    // Récupérer tous les chat rooms de l'utilisateur
    const chatRooms = await this.messagesService.getUserChatRooms(user.id);

    // Pour chaque room, récupérer les messages manqués
    const missedMessages = {};
    if (data.lastOnlineTimestamp) {
      const timestamp = new Date(data.lastOnlineTimestamp);

      for (const room of chatRooms) {
        const messages = await this.messagesService.getMessagesAfter(
          room.id,
          user.id,
          timestamp,
        );

        if (messages.length > 0) {
          missedMessages[room.id] = messages;
        }

        // Rejoindre automatiquement les rooms
        client.join(room.id);

        // Marquer les messages comme délivrés
        await this.messagesService.markMessagesAsDelivered(user.id, room.id);
      }
    }

    // Informer les autres utilisateurs de la reconnexion
    this.server.emit('userStatusChange', {
      userId: user.id,
      isOnline: true,
    });

    return {
      status: 'success',
      chatRooms,
      missedMessages,
    };
  }
}