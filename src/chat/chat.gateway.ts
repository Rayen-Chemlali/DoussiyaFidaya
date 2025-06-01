import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  ConnectedSocket,
  MessageBody,
  WsException,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UsePipes, ValidationPipe, Logger } from '@nestjs/common';
import { ChatService } from './chat.service';
import { SendMessageDto } from './dto/send-message.dto'; // Includes patientId
import { Message } from '../types/chat.types'; // Import your Message type

// Assuming your Doctor type is available or you can define a subset
interface AuthenticatedDoctorData {
  id: string;
  // other fields from doctor object if needed by client on connection
}

@WebSocketGateway({
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST'],
    credentials: true,
  },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(ChatGateway.name);
  private connectedClients: Map<string, Socket> = new Map();

  constructor(
    private readonly chatService: ChatService,
  ) {}

  async handleConnection(client: Socket) {
    try {
      const token = client.handshake.auth.token || client.handshake.headers['authorization']?.split(' ')[1];
      if (!token) {
        this.logger.warn('Connection attempt without token.');
        client.disconnect(true);
        return;
      }

      const doctor = await this.chatService.validateToken(token);
      if (!doctor) {
        this.logger.warn(`Invalid token for connection. Token: ${token.substring(0, 10)}...`);
        client.disconnect(true);
        return;
      }

      this.connectedClients.set(doctor.id, client);
      client.data.doctorId = doctor.id; // Store doctor's own ID on the socket
      client.data.doctor = doctor; // Store full doctor object if needed by client
      client.join(doctor.id); // Room for general notifications to this doctor
      this.logger.log(`Client connected: ${doctor.id} (Socket ID: ${client.id})`);

      // Emit confirmation with user info
      client.emit('connected_user_info', { id: doctor.id, firstName: doctor.first_name, lastName: doctor.last_name });


      this.server.emit('doctorOnline', { doctorId: doctor.id, status: 'online' });

    } catch (error) {
      this.logger.error('Error during WebSocket connection handling', error);
      client.disconnect(true);
    }
  }

  handleDisconnect(client: Socket) {
    const doctorId = client.data.doctorId;
    if (doctorId) {
      this.connectedClients.delete(doctorId);
      // client.leave(doctorId); // No need to leave if room is just doctor.id
      this.logger.log(`Client disconnected: ${doctorId} (Socket ID: ${client.id})`);
      this.server.emit('doctorOffline', { doctorId: doctorId, status: 'offline' });
    } else {
      this.logger.log(`Socket disconnected without doctorId: ${client.id}`);
    }
  }

  @UsePipes(new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true }))
  @SubscribeMessage('sendMessage')
  async handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: SendMessageDto, // Now includes patientId
  ): Promise<any> {
    try {
      const senderId = client.data.doctorId;
      if (!senderId) {
        throw new WsException('Unauthorized: No senderId found on socket.');
      }

      // Ensure patientId is present (already validated by DTO if required)
      if (!data.patientId) {
        throw new WsException('Patient ID is required to send a message.');
      }

      const message = await this.chatService.createMessage(senderId, data);

      // Prepare message payload for emission (e.g., with signed URLs for attachments)
      const populatedMessage = { ...message };
      if (populatedMessage.attachments) {
        for (const att of populatedMessage.attachments) {
          if (att.path) {
            att.url = await this.chatService.getSignedUrlForAttachment(att.path);
          }
        }
      }


      // Emit to the receiver's specific room (doctor.id)
      const receiverSocket = this.connectedClients.get(data.receiverId);
      if (receiverSocket) {
        // The 'newMessage' event should carry patientId to allow client to route it correctly
        receiverSocket.emit('newMessage', populatedMessage);
      } else {
        this.logger.log(`Receiver ${data.receiverId} is offline for patient ${data.patientId}. TODO: Trigger push notification.`);
        // await this.notificationService.sendChatPushNotification(data.receiverId, message);
      }

      // Acknowledge to sender, also with patientId
      client.emit('messageSent', populatedMessage);
      return populatedMessage; // For Socket.IO ack

    } catch (error) {
      this.logger.error(`Failed to send message from ${client.data.doctorId} for patient ${data.patientId}`, error);
      if (error instanceof WsException) {
        throw error;
      }
      throw new WsException(error.message || 'Failed to send message');
    }
  }

  @SubscribeMessage('markAsRead')
  async handleMarkAsRead(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { messageId: string, patientId: string }, // client should send patientId for context
  ): Promise<any> {
    try {
      const readerId = client.data.doctorId;
      const message = await this.chatService.markMessageAsRead(data.messageId, readerId);

      const senderSocket = this.connectedClients.get(message.senderId);
      if (senderSocket) {
        senderSocket.emit('messageRead', {
          messageId: message.id,
          readBy: readerId,
          patientId: message.patientId, // Send patientId back
          // conversationId: `${message.senderId}-${message.patientId}` // Or however the client identifies convos
        });
      }
      return { status: 'success', messageId: message.id, patientId: message.patientId };
    } catch (error) {
      this.logger.error(`Failed to mark message ${data.messageId} as read by ${client.data.doctorId}`, error);
      throw new WsException(error.message || 'Failed to mark message as read');
    }
  }

  // Typing indicators now need patientId for context
  @SubscribeMessage('startTyping')
  handleStartTyping(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { receiverId: string, patientId: string },
  ): void {
    const senderId = client.data.doctorId;
    if (!senderId || !data.receiverId || !data.patientId) return;

    const receiverSocket = this.connectedClients.get(data.receiverId);
    if (receiverSocket) {
      // Emit with patientId so client can show typing in correct chat window
      receiverSocket.emit('typing', { doctorId: senderId, patientId: data.patientId, isTyping: true });
    }
    this.logger.debug(`Doctor ${senderId} started typing to ${data.receiverId} for patient ${data.patientId}`);
  }

  @SubscribeMessage('stopTyping')
  handleStopTyping(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { receiverId: string, patientId: string },
  ): void {
    const senderId = client.data.doctorId;
    if (!senderId || !data.receiverId || !data.patientId) return;

    const receiverSocket = this.connectedClients.get(data.receiverId);
    if (receiverSocket) {
      receiverSocket.emit('typing', { doctorId: senderId, patientId: data.patientId, isTyping: false });
    }
    this.logger.debug(`Doctor ${senderId} stopped typing to ${data.receiverId} for patient ${data.patientId}`);
  }

  @SubscribeMessage('deleteMessage')
  async handleDeleteMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { messageId: string, patientId: string, receiverId: string } // receiverId needed to notify other party
  ): Promise<any> {
    const doctorId = client.data.doctorId;
    if (!doctorId) {
      throw new WsException('Unauthorized');
    }
    try {
      await this.chatService.deleteMessage(data.messageId, doctorId);
      // Notify both sender (ack) and receiver
      client.emit('messageDeleted', { messageId: data.messageId, patientId: data.patientId, status: 'success' });

      const receiverSocket = this.connectedClients.get(data.receiverId);
      if (receiverSocket) {
        receiverSocket.emit('messageDeleted', { messageId: data.messageId, patientId: data.patientId });
      }
      this.logger.log(`Message ${data.messageId} deleted by ${doctorId} for patient ${data.patientId}`);
      return { status: 'success', messageId: data.messageId, patientId: data.patientId };
    } catch (error) {
      this.logger.error(`Failed to delete message ${data.messageId} by ${doctorId}`, error);
      throw new WsException(error.message || 'Failed to delete message');
    }
  }
}