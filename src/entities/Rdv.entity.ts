import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Patient } from './patient.entity';
import { User } from './user.entity';
import { Consultation } from './consultation.entity';
import { Doctor } from './doctor.entity';

@Entity('rdvs')
export class Rdv {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp with time zone', nullable: false })
  date: Date;

  @Column({ type: 'time', nullable: false })
  time: string;

  @Column({ type: 'interval', nullable: false })
  duration: string;

  @ManyToOne(() => Patient, { nullable: false })
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @ManyToOne(() => Doctor, { nullable: true })
  @JoinColumn({ name: 'doctor_id' })
  doctor: Doctor;

  @OneToOne(() => Consultation, consultation => consultation.rdv, { nullable: true })
  @JoinColumn({ name: 'consultation_id' })
  consultation: Consultation;
}