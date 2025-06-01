import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  ConnectedSocket,
  MessageBody,
  WsException, // Pour les erreurs WebSocket
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UsePipes, ValidationPipe, Logger } from '@nestjs/common'; // Ajout Logger
import { ChatService } from './chat.service';
import { SendMessageDto } from './dto/send-message.dto'; // Import DTO
// import { NotificationService } from '../notification/notification.service'; // Si vous avez un service de notification

@WebSocketGateway({
  cors: {
    origin: process.env.CORS_ORIGIN || '*', // Utiliser une variable d'environnement
    methods: ['GET', 'POST'],
    credentials: true,
  },
  // path: '/socket.io' // Si vous voulez un chemin spécifique
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(ChatGateway.name);
  // La map connectedClients est utile par instance. Pour une solution globale avec Redis,
  // vous pourriez avoir besoin de vérifier l'état de connexion via Redis aussi.
  private connectedClients: Map<string, Socket> = new Map();

  constructor(
    private readonly chatService: ChatService,
    // private readonly notificationService: NotificationService, // Injecter le service de notification
  ) {}

  async handleConnection(client: Socket) {
    try {
      const token = client.handshake.auth.token || client.handshake.headers['authorization']?.split(' ')[1];
      if (!token) {
        this.logger.warn('Connection attempt without token.');
        client.disconnect(true);
        return;
      }

      // Validation du token et récupération des données du docteur
      const doctor = await this.chatService.validateToken(token);
      if (!doctor) {
        this.logger.warn(`Invalid token for connection. Token: ${token.substring(0, 10)}...`);
        client.disconnect(true);
        return;
      }

      // Utiliser l'ID du docteur directement (pas user_id)
      this.connectedClients.set(doctor.id, client);
      client.data.doctorId = doctor.id;
      client.join(doctor.id); // Le docteur rejoint une room portant son ID pour messages privés
      this.logger.log(`Client connected: ${doctor.id} (Socket ID: ${client.id})`);

      // Notifier les autres (ou un service de présence) que le docteur est en ligne
      // Pour une présence à l'échelle, émettre via Redis ou mettre à jour un statut dans Redis
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
      client.leave(doctorId);
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
    @MessageBody() data: SendMessageDto,
  ): Promise<any> { // Le client s'attend à un acquittement, donc on peut retourner le message ou un statut
    try {
      const senderId = client.data.doctorId;
      if (!senderId) {
        throw new WsException('Unauthorized: No senderId found on socket.');
      }

      const message = await this.chatService.createMessage(senderId, data);

      // Envoyer au destinataire s'il est connecté (directement ou via la room)
      // this.server.to(data.receiverId).emit('newMessage', message); // Si le receiverId est une room
      const receiverSocket = this.connectedClients.get(data.receiverId);
      if (receiverSocket) {
        receiverSocket.emit('newMessage', message);
      } else {
        this.logger.log(`Receiver ${data.receiverId} is offline. TODO: Trigger push notification.`);
        // await this.notificationService.sendChatPushNotification(data.receiverId, message);
      }

      // Renvoyer le message à l'expéditeur pour confirmation (avec ID et timestamps)
      client.emit('messageSent', message); // Ou juste un ack: return { status: 'ok', messageId: message.id };
      return message; // Pour l'ack de Socket.IO si le client l'utilise

    } catch (error) {
      this.logger.error(`Failed to send message from ${client.data.doctorId}`, error);
      if (error instanceof WsException) {
        throw error;
      }
      throw new WsException(error.message || 'Failed to send message'); // Envoie l'erreur au client
    }
  }

  @SubscribeMessage('markAsRead')
  async handleMarkAsRead(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { messageId: string },
  ): Promise<any> {
    try {
      const readerId = client.data.doctorId;
      const message = await this.chatService.markMessageAsRead(data.messageId, readerId);

      // Notifier l'expéditeur que le message a été lu (si l'expéditeur est en ligne)
      // this.server.to(message.senderId).emit('messageRead', { messageId: message.id, conversationId: message.receiverId /*ou autre identifiant de conv*/ });
      const senderSocket = this.connectedClients.get(message.senderId);
      if (senderSocket) {
        senderSocket.emit('messageRead', {
          messageId: message.id,
          readBy: readerId,
          // Potentiellement l'ID de la conversation pour mettre à jour l'UI
          // conversationId: readerId === message.senderId ? message.receiverId : message.senderId
        });
      }
      return { status: 'success', messageId: message.id };
    } catch (error) {
      this.logger.error(`Failed to mark message ${data.messageId} as read by ${client.data.doctorId}`, error);
      throw new WsException(error.message || 'Failed to mark message as read');
    }
  }

  @SubscribeMessage('startTyping')
  handleStartTyping(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { receiverId: string },
  ): void {
    const senderId = client.data.doctorId;
    if (!senderId || !data.receiverId) return;

    // this.server.to(data.receiverId).emit('typing', { doctorId: senderId, isTyping: true });
    const receiverSocket = this.connectedClients.get(data.receiverId);
    if (receiverSocket) {
      receiverSocket.emit('typing', { doctorId: senderId, conversationPartnerId: senderId, isTyping: true });
    }
    this.logger.debug(`Doctor ${senderId} started typing to ${data.receiverId}`);
  }

  @SubscribeMessage('stopTyping')
  handleStopTyping(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { receiverId: string },
  ): void {
    const senderId = client.data.doctorId;
    if (!senderId || !data.receiverId) return;

    // this.server.to(data.receiverId).emit('typing', { doctorId: senderId, isTyping: false });
    const receiverSocket = this.connectedClients.get(data.receiverId);
    if (receiverSocket) {
      receiverSocket.emit('typing', { doctorId: senderId, conversationPartnerId: senderId, isTyping: false });
    }
    this.logger.debug(`Doctor ${senderId} stopped typing to ${data.receiverId}`);
  }
}