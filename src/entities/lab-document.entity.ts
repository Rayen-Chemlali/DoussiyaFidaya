import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Patient } from './patient.entity';
import { Laboratory } from './laboratory.entity';
import { LabRequest } from './lab-request.entity';
import { LabAttachment } from './lab-attachment.entity';
import { LabResult } from './lab-result.entity';

@Entity('lab_documents')
export class LabDocument {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp with time zone', nullable: true })
  completed_at: Date;

  @CreateDateColumn({ nullable: false })
  created_at: Date;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @ManyToOne(() => Patient, { nullable: false })
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @Column({ type: 'timestamp with time zone', nullable: false })
  requested_at: Date;

  @Column({ type: 'text', nullable: false })
  status: string;

  @Column({ type: 'text', nullable: true })
  section: string;

  @ManyToOne(() => Laboratory, { nullable: true })
  @JoinColumn({ name: 'laboratory_id' })
  laboratory: Laboratory;

  @ManyToOne(() => LabRequest, { nullable: true })
  @JoinColumn({ name: 'lab_request_id' })
  lab_request: LabRequest;

  @OneToMany(() => LabAttachment, attachment => attachment.lab_document)
  attachments: LabAttachment[];


  @OneToMany(() => LabResult, result => result.lab_document,{nullable:true})
  results: LabResult[];
}