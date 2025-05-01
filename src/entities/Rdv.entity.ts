import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Patient } from './patient.entity';
import { User } from './user.entity';
import { Consultation } from './consultation.entity';
import { Doctor } from './doctor.entity';
import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { GraphQLDuration, GraphQLTime, GraphQLUUID } from 'graphql-scalars';

@Entity('rdvs')
@ObjectType()
export class Rdv {
  @Field(() => GraphQLUUID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => GraphQLISODateTime)
  @Column({ type: 'timestamp with time zone', nullable: false })
  date: Date;

  @Field(() => GraphQLTime)
  @Column({ type: 'time', nullable: false })
  time: string;

  @Field(() => GraphQLDuration)
  @Column({ type: 'interval', nullable: false })
  duration: string;

  @Field(() => Patient)
  @ManyToOne(() => Patient, { nullable: false })
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @Field(() => Doctor)
  @ManyToOne(() => Doctor, { nullable: true })
  @JoinColumn({ name: 'doctor_id' })
  doctor: Doctor;

  @Field(() => Consultation)
  @OneToOne(() => Consultation, consultation => consultation.rdv, { nullable: true })
  @JoinColumn({ name: 'consultation_id' })
  consultation: Consultation;
}