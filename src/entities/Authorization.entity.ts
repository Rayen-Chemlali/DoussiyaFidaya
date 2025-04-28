import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { InstitutMedical } from './institut-medical.entity';
import { Patient } from './patient.entity';

@Entity('authorizations')
export class Authorization {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => InstitutMedical, { nullable: true })
  @JoinColumn({ name: 'institut_medical_id' })
  institut_medical: InstitutMedical;

  @ManyToOne(() => Patient, { nullable: false })
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @Column({ type: 'text', nullable: false })
  level: string;
}