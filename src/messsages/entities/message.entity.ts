import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Field, ObjectType, GraphQLISODateTime } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { User } from '../../users/entities/user.entity';

// Define enum first
export enum MessageStatus {
  SENT = 'sent',
  DELIVERED = 'delivered',
  SEEN = 'seen'
}

@ObjectType()
@Entity('chat_rooms')
export class ChatRoom {
  @Field(() => GraphQLUUID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  name: string | null;

  @Field(() => Boolean)
  @Column({ type: 'boolean', default: false })
  is_group: boolean;

  @Field(() => GraphQLISODateTime)
  @CreateDateColumn({ nullable: false })
  created_at: Date;

  @Field(() => [User])
  @ManyToMany(() => User)
  @JoinTable({
    name: 'user_chat_rooms',
    joinColumn: { name: 'chat_room_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'user_id', referencedColumnName: 'id' },
  })
  participants: User[];

  @Field(() => [Message], { nullable: true })
  @OneToMany(() => Message, (message) => message.chat_room)
  messages: Message[];
}

@ObjectType()
@Entity('messages')
export class Message {
  @Field(() => GraphQLUUID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'text', nullable: false })
  content: string;

  @Field(() => MessageStatus)
  @Column({ type: 'enum', enum: MessageStatus, default: MessageStatus.SENT })
  status: MessageStatus;

  @Field(() => GraphQLISODateTime)
  @CreateDateColumn({ nullable: false })
  created_at: Date;

  @Field(() => User)
  @ManyToOne(() => User, { nullable: false })
  sender: User;

  @Field(() => ChatRoom)
  @ManyToOne(() => ChatRoom, (room) => room.messages, { nullable: false })
  chat_room: ChatRoom;

  @Field(() => [MessageAttachment], { nullable: true })
  @OneToMany(() => MessageAttachment, (attachment) => attachment.message)
  attachments: MessageAttachment[];
}

@ObjectType()
@Entity('message_attachments')
export class MessageAttachment {
  @Field(() => GraphQLUUID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'text', nullable: false })
  file_name: string;

  @Field()
  @Column({ type: 'text', nullable: false })
  file_path: string;

  @Field()
  @Column({ type: 'text', nullable: false })
  mime_type: string;

  @Field()
  @Column({ type: 'integer', nullable: false })
  file_size: number;

  @Field(() => GraphQLISODateTime)
  @CreateDateColumn({ nullable: false })
  created_at: Date;

  @Field(() => Message)
  @ManyToOne(() => Message, (message) => message.attachments, { nullable: false })
  message: Message;
}

@ObjectType()
@Entity('user_chat_room_status')
export class UserChatRoomStatus {
  @Field(() => GraphQLUUID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => User)
  @ManyToOne(() => User, { nullable: false })
  user: User;

  @Field(() => ChatRoom)
  @ManyToOne(() => ChatRoom, { nullable: false })
  chat_room: ChatRoom;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @Column({ type: 'timestamp with time zone', nullable: true })
  last_read: Date | null;

  @Field(() => Boolean)
  @Column({ type: 'boolean', default: false })
  is_connected: boolean;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @Column({ type: 'timestamp with time zone', nullable: true })
  last_online: Date | null;
}