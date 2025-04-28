import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { LabDocument } from './lab-document.entity';

@Entity('lab_attachments')
export class LabAttachment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => LabDocument, labDocument => labDocument.attachments, { nullable: false })
  @JoinColumn({ name: 'lab_document_id' })
  lab_document: LabDocument;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false })
  type: string;

  @Column({ type: 'text', nullable: false })
  url: string;
}