import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { Doctor } from '../../doctors/entities/doctor.entity';
import { Patient } from '../../patients/entities/patient.entity';


@Entity('certificates')
@ObjectType()
export class Certificate {
  @Field(() => GraphQLUUID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'text', nullable: false })
  type: string;

  @Field(() => Doctor)
  @ManyToOne(() => Doctor, { nullable: true })
  @JoinColumn({ name: 'doctor_id' })
  doctor: Doctor;

  @Field(() => Patient)
  @ManyToOne(() => Patient, { nullable: false })
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @Field(() => GraphQLISODateTime)
  @Column({ type: 'timestamp with time zone', nullable: true })
  start_date: Date;

  @Field(() => GraphQLISODateTime)
  @Column({ type: 'timestamp with time zone', nullable: true })
  end_date: Date;

  @Field()
  @Column({ type: 'text', nullable: true })
  description: string;
}