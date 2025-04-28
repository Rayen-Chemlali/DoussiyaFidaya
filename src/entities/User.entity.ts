import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';
import { Patient } from './patient.entity';
import { Doctor } from './doctor.entity';

export enum Role {
  Patient = 'Patient',
  Doctor = 'Doctor',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: true })
  address: string;

  @CreateDateColumn({ nullable: false })
  created_at: Date;

  @Column({ type: 'text', unique: true, nullable: false })
  email: string;

  @Column({ type: 'text', nullable: false })
  first_name: string;

  @Column({ type: 'text', nullable: false })
  last_name: string;

  @Column({ type: 'boolean', nullable: false })
  is_verified: boolean;

  @Column({ type: 'timestamp with time zone', nullable: true })
  last_login: Date;

  @Column({ type: 'text', nullable: true })
  phone: string;

  @Column({ type: 'text', nullable: true })
  profile_picture: string;

  @Column({ type: 'enum', enum: Role, nullable: false })
  role: Role;

  @Column({ type: 'uuid', nullable: true })
  associated_id: string;

  // @Column({ type: 'text', nullable: true })
  // specialization: string;

  @UpdateDateColumn({ nullable: false })
  updated_at: Date;

  // @OneToOne(() => Patient, patient => patient.user)
  // patient: Patient;
  //
  // @OneToOne(() => Doctor, doctor => doctor.user)
  // doctor: Doctor;
}