import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Patient } from './patient.entity';
import { Medication } from './medication.entity';

@Entity('prescriptions')
export class Prescription {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp with time zone', nullable: false })
  date: Date;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'doctor_id' })
  doctor: User;

  @Column({ type: 'text', nullable: true })
  instructions: string;

  @Column({ type: 'boolean', nullable: false })
  is_signed: boolean;

  @Column({ type: 'text', nullable: true })
  section: string;

  @ManyToOne(() => Patient, { nullable: false })
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @Column({ type: 'text', nullable: false })
  status: string;

  @UpdateDateColumn({ nullable: false })
  updated_at: Date;

  @OneToMany(() => Medication, medication => medication.prescription)
  medications: Medication[];
}