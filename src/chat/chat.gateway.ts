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
import { SendMessageDto } from './dto/send-message.dto';
import { Message } from '../types/chat.types';

interface AuthenticatedDoctorData {
  id: string;
  first_name: string;
  last_name: string;
  specialty: string;
  type: string;
  is_license_verified: boolean;
  bio?: string;
  education: string[];
  experience: string[];
  languages: string[];
  user_id: string;
  profile_image?: string;
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



  private connectedDoctors: Map<string, Socket> = new Map();

  constructor(
    private readonly chatService: ChatService,
  ) {}

  // Le token passe en header
  async handleConnection(client: Socket) {
    try {
      let token = client.handshake.headers['authorization']?.split(' ')[1];

      if (!token) {
        const cookies = client.handshake.headers.cookie;
        if (cookies) {
          const tokenMatch = cookies.match(/(?:^|;\s*)token=([^;]*)/);
          token = tokenMatch ? decodeURIComponent(tokenMatch[1]) : undefined;
        }
      }

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

      this.connectedDoctors.set(doctor.id, client);
      client.data.doctorId = doctor.id;
      client.data.doctor = doctor;

      client.join(doctor.id);

      this.logger.log(`Doctor connected: ${doctor.id} - ${doctor.first_name} ${doctor.last_name} (Socket: ${client.id})`);

      client.emit('connected_user_info', {
        id: doctor.id,
        firstName: doctor.first_name,
        lastName: doctor.last_name,
        specialty: doctor.specialty,
        type: doctor.type,
        isLicenseVerified: doctor.is_license_verified,
        profileImage: doctor.profile_image
      });

      this.server.emit('doctorOnline', {
        doctorId: doctor.id,
        status: 'online',
        firstName: doctor.first_name,
        lastName: doctor.last_name
      });

    } catch (error) {
      this.logger.error('Error during WebSocket connection handling', error);
      client.disconnect(true);
    }
  }

  handleDisconnect(client: Socket) {
    const doctorId = client.data.doctorId;
    if (doctorId) {
      this.connectedDoctors.delete(doctorId);
      this.logger.log(`Doctor disconnected: ${doctorId} (Socket: ${client.id})`);

      this.server.emit('doctorOffline', {
        doctorId: doctorId,
        status: 'offline'
      });
    } else {
      this.logger.log(`Socket disconnected without doctorId: ${client.id}`);
    }
  }

  @UsePipes(new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true }))
  @SubscribeMessage('sendMessage')
  async handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: SendMessageDto,
  ): Promise<any> {
    try {
      const senderId = client.data.doctorId;
      if (!senderId) {
        throw new WsException('Unauthorized: No senderId found on socket.');
      }

      if (!data.patientId) {
        throw new WsException('Patient ID is required to send a message.');
      }

      if (!data.receiverId) {
        throw new WsException('Receiver ID is required to send a message.');
      }

      const message = await this.chatService.createMessage(senderId, data);


      const receiverSocket = this.connectedDoctors.get(data.receiverId);
      if (receiverSocket) {
        receiverSocket.emit('newMessage', message);
        this.logger.log(`Message sent from ${senderId} to ${data.receiverId} for patient ${data.patientId}`);
      } else {
        this.logger.log(`Receiver ${data.receiverId} is offline for patient ${data.patientId}. Message stored in database.`);
      }

      client.emit('messageSent', message);
      return message;

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
    @MessageBody() data: { messageId: string, patientId: string },
  ): Promise<any> {
    try {
      const readerId = client.data.doctorId;
      if (!readerId) {
        throw new WsException('Unauthorized: No readerId found on socket.');
      }

      const message = await this.chatService.markMessageAsRead(data.messageId, readerId);

      const senderSocket = this.connectedDoctors.get(message.senderId);
      if (senderSocket) {
        senderSocket.emit('messageRead', {
          messageId: message.id,
          readBy: readerId,
          patientId: message.patientId,
          readAt: new Date().toISOString()
        });
      }

      return {
        status: 'success',
        messageId: message.id,
        patientId: message.patientId
      };
    } catch (error) {
      this.logger.error(`Failed to mark message ${data.messageId} as read by ${client.data.doctorId}`, error);
      throw new WsException(error.message || 'Failed to mark message as read');
    }
  }

  @SubscribeMessage('startTyping')
  handleStartTyping(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { receiverId: string, patientId: string },
  ): void {
    const senderId = client.data.doctorId;
    if (!senderId || !data.receiverId || !data.patientId) {
      this.logger.warn('Invalid typing data received');
      return;
    }

    const receiverSocket = this.connectedDoctors.get(data.receiverId);
    if (receiverSocket) {
      receiverSocket.emit('typing', {
        doctorId: senderId,
        patientId: data.patientId,
        isTyping: true
      });
    }
    this.logger.debug(`Doctor ${senderId} started typing to ${data.receiverId} for patient ${data.patientId}`);
  }

  @SubscribeMessage('stopTyping')
  handleStopTyping(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { receiverId: string, patientId: string },
  ): void {
    const senderId = client.data.doctorId;
    if (!senderId || !data.receiverId || !data.patientId) {
      this.logger.warn('Invalid typing data received');
      return;
    }

    const receiverSocket = this.connectedDoctors.get(data.receiverId);
    if (receiverSocket) {
      receiverSocket.emit('typing', {
        doctorId: senderId,
        patientId: data.patientId,
        isTyping: false
      });
    }
    this.logger.debug(`Doctor ${senderId} stopped typing to ${data.receiverId} for patient ${data.patientId}`);
  }

  @SubscribeMessage('deleteMessage')
  async handleDeleteMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { messageId: string, patientId: string, receiverId: string }
  ): Promise<any> {
    const doctorId = client.data.doctorId;
    if (!doctorId) {
      throw new WsException('Unauthorized');
    }

    try {
      await this.chatService.deleteMessage(data.messageId, doctorId);

      client.emit('messageDeleted', {
        messageId: data.messageId,
        patientId: data.patientId,
        status: 'success'
      });

      const receiverSocket = this.connectedDoctors.get(data.receiverId);
      if (receiverSocket) {
        receiverSocket.emit('messageDeleted', {
          messageId: data.messageId,
          patientId: data.patientId,
          deletedBy: doctorId
        });
      }

      this.logger.log(`Message ${data.messageId} deleted by ${doctorId} for patient ${data.patientId}`);
      return {
        status: 'success',
        messageId: data.messageId,
        patientId: data.patientId
      };
    } catch (error) {
      this.logger.error(`Failed to delete message ${data.messageId} by ${doctorId}`, error);
      throw new WsException(error.message || 'Failed to delete message');
    }
  }

  @SubscribeMessage('joinPatientRoom')
  handleJoinPatientRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { patientId: string, otherDoctorId: string },
  ): void {
    const doctorId = client.data.doctorId;
    if (!doctorId || !data.patientId || !data.otherDoctorId) {
      this.logger.warn('Invalid room join data received');
      return;
    }

    const roomName = `patient_${data.patientId}_doctors_${[doctorId, data.otherDoctorId].sort().join('_')}`;
    client.join(roomName);

    this.logger.log(`Doctor ${doctorId} joined room ${roomName}`);
    client.emit('joinedRoom', { roomName, patientId: data.patientId });
  }

  @SubscribeMessage('leavePatientRoom')
  handleLeavePatientRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { patientId: string, otherDoctorId: string },
  ): void {
    const doctorId = client.data.doctorId;
    if (!doctorId || !data.patientId || !data.otherDoctorId) {
      this.logger.warn('Invalid room leave data received');
      return;
    }

    const roomName = `patient_${data.patientId}_doctors_${[doctorId, data.otherDoctorId].sort().join('_')}`;
    client.leave(roomName);

    this.logger.log(`Doctor ${doctorId} left room ${roomName}`);
    client.emit('leftRoom', { roomName, patientId: data.patientId });
  }

  @SubscribeMessage('getOnlineDoctors')
  handleGetOnlineDoctors(@ConnectedSocket() client: Socket): void {
    const onlineDoctorIds = Array.from(this.connectedDoctors.keys());
    client.emit('onlineDoctors', { doctorIds: onlineDoctorIds });
  }

  @SubscribeMessage('getConversations')
  async handleGetConversations(@ConnectedSocket() client: Socket): Promise<any> {
    try {
      const doctorId = client.data.doctorId;
      if (!doctorId) {
        throw new WsException('Unauthorized: No doctorId found on socket.');
      }

      const result = await this.chatService.getMessagesByDoctorSenderId(doctorId);

      client.emit('conversationList', result);
      return result;
    } catch (error) {
      this.logger.error(`Failed to get conversations for doctor ${client.data.doctorId}`, error);
      throw new WsException(error.message || 'Failed to get conversations');
    }
  }

  @SubscribeMessage('getConversationMessages')
  async handleGetConversationMessages(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: {
      patientId: string,
      doctorReceiverId: string,
      cursor?: string,
      limit?: number
    }
  ): Promise<any> {
    try {
      const doctorId = client.data.doctorId;
      if (!doctorId) {
        throw new WsException('Unauthorized: No doctorId found on socket.');
      }

      if (!data.patientId || !data.doctorReceiverId) {
        throw new WsException('patientId and doctorReceiverId are required.');
      }

      const result = await this.chatService.getConvByDoctorSenderId(
        data.patientId,
        doctorId,
        data.doctorReceiverId,
        data.cursor,
        data.limit || 50
      );

      client.emit('conversationMessages', result);
      return result;
    } catch (error) {
      this.logger.error(`Failed to get conversation messages for doctor ${client.data.doctorId}`, error);
      throw new WsException(error.message || 'Failed to get conversation messages');
    }
  }

  @SubscribeMessage('checkConversationExists')
  async handleCheckConversationExists(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { patientId: string, doctorReceiverId: string }
  ): Promise<any> {
    try {
      const doctorId = client.data.doctorId;
      if (!doctorId) {
        throw new WsException('Unauthorized: No doctorId found on socket.');
      }

      if (!data.patientId || !data.doctorReceiverId) {
        throw new WsException('patientId and doctorReceiverId are required.');
      }

      const exists = await this.chatService.verifyIfExistConv(
        data.patientId,
        doctorId,
        data.doctorReceiverId
      );

      const result = {
        exists,
        patientId: data.patientId,
        doctorReceiverId: data.doctorReceiverId
      };

      client.emit('conversationExistsResult', result);
      return result;
    } catch (error) {
      this.logger.error(`Failed to check conversation existence for doctor ${client.data.doctorId}`, error);
      throw new WsException(error.message || 'Failed to check conversation existence');
    }
  }
}
