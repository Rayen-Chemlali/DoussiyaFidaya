import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { GeneralMedicalRecord } from './general-medical-record.entity';

@Entity('patients')
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'integer', unique: true, nullable: true })
  cin: number;

  @Column({ type: 'timestamp with time zone', nullable: false })
  date_of_birth: Date;

  @Column({ type: 'text', nullable: false })
  gender: string;

  @Column({ type: 'text', nullable: true })
  profile_image: string;

  @OneToOne(() => GeneralMedicalRecord, { nullable: true })
  @JoinColumn({ name: 'general_medical_record_id' })
  general_medical_record: GeneralMedicalRecord;

  @OneToOne(() => User, user => user.patient, { nullable: true })
  @JoinColumn({ name: 'user_id' })
  user: User;
}