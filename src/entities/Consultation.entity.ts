import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne, ManyToMany, JoinTable } from 'typeorm';
import { User } from './user.entity';
import { InstitutMedical } from './institut-medical.entity';
import { Prescription } from './prescription.entity';
import { Patient } from './patient.entity';
import { LabRequest } from './lab-request.entity';
import { Doctor } from './doctor.entity';

@Entity('consultations')
export class Consultation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: true })
  section: string;

  @Column({ type: 'timestamp with time zone', nullable: false })
  date: Date;

  @Column({ type: 'text', array: true, nullable: true })
  notes: string[];

  @Column({ type: 'jsonb', nullable: true })
  measures: object;

  @ManyToOne(() => Doctor, { nullable: true })
  @JoinColumn({ name: 'doctor_id' })
  doctor: Doctor;

  @ManyToOne(() => InstitutMedical, { nullable: true })
  @JoinColumn({ name: 'institut_medical_id' })
  institut_medical: InstitutMedical;

  @OneToOne(() => Prescription, prescription => prescription.consultation, { nullable: true })
  @JoinColumn({ name: 'prescription_id' })
  prescription: Prescription;

  @ManyToOne(() => Patient, { nullable: false })
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @ManyToMany(() => LabRequest)
  @JoinTable({
    name: 'consultation_lab_requests',
    joinColumn: { name: 'consultation_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'lab_request_id', referencedColumnName: 'id' },
  })
  lab_requests: LabRequest[];
}