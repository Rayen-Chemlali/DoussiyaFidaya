import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { LabDocument } from './lab-document.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

@Entity('lab_attachments')
@ObjectType()
export class LabAttachment {
  @Field(() => GraphQLUUID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => LabDocument)
  @ManyToOne(() => LabDocument, labDocument => labDocument.attachments, { nullable: false })
  @JoinColumn({ name: 'lab_document_id' })
  lab_document: LabDocument;

  @Field()
  @Column({ type: 'text', nullable: false })
  name: string;

  @Field()
  @Column({ type: 'text', nullable: false })
  type: string;

  @Field()
  @Column({ type: 'text', nullable: false })
  url: string;
}