import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

import { Field, GraphQLISODateTime, ObjectType, registerEnumType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { Patient } from '../../patients/entities/patient.entity';
import { Laboratory } from '../../laboratorys/entities/laboratory.entity';
import { LabRequest } from '../../lab-requests/entities/lab-request.entity';
import { LabAttachment } from '../../lab-attachments/entities/lab-attachment.entity';
import { LabResult } from '../../lab-results/entities/lab-result.entity';
export enum LabDocumentStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}
registerEnumType(LabDocumentStatus, {
  name: 'LabDocumentStatus',
  description: "Le statut d'un document de laboratoire",
})
@Entity('lab_documents')
@ObjectType()
export class LabDocument {
  @Field(() => GraphQLUUID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => GraphQLISODateTime)
  @Column({ type: 'timestamp with time zone', nullable: true })
  completed_at: Date;

  @Field(() => GraphQLISODateTime)
  @CreateDateColumn({ nullable: false })
  created_at: Date;

  @Field(() => [String])
  @Column({ type: 'text', nullable: true })
  notes: string;

  @Field(() => Patient)
  @ManyToOne(() => Patient, { nullable: false })
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @Field(() => GraphQLISODateTime)
  @Column({ type: 'timestamp with time zone', nullable: false })
  requested_at: Date;

  @Field(() => LabDocumentStatus)
  @Column({ type: 'enum',enum:LabDocumentStatus, nullable: false })
  status: LabDocumentStatus;

  @Field(() => String)
  @Column({ type: 'text', nullable: true })
  section: string;

  @Field(() => Laboratory)
  @ManyToOne(() => Laboratory, { nullable: true })
  @JoinColumn({ name: 'laboratory_id' })
  laboratory: Laboratory;

  @Field(() => LabRequest)
  @ManyToOne(() => LabRequest, { nullable: true })
  @JoinColumn({ name: 'lab_request_id' })
  lab_request: LabRequest;

  @Field(() => [LabAttachment])
  @OneToMany(() => LabAttachment, attachment => attachment.lab_document)
  attachments: LabAttachment[];

  @Field(() => [LabResult])
  @OneToMany(() => LabResult, result => result.lab_document,{nullable:true})
  results: LabResult[];
}

