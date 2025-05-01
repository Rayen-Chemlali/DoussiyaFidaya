import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLEmailAddress, GraphQLPhoneNumber, GraphQLUUID } from 'graphql-scalars';

@Entity('laboratories')
@ObjectType()
export class Laboratory {
  @Field(() => GraphQLUUID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'text', nullable: true })
  address: string;

  @Field(() => GraphQLPhoneNumber)
  @Column({ type: 'text', nullable: true })
  phone: string;

  @Field(() => GraphQLEmailAddress)
  @Column({ type: 'text', nullable: true })
  email: string;

  @Field()
  @Column({ type: 'text', nullable: false })
  name: string;
}