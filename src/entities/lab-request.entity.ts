import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Patient } from './patient.entity';
import { Doctor } from './doctor.entity';
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
export enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

registerEnumType(Priority, {
  name: 'Priority',
  description: 'Priorité de la demande de laboratoire',
})
@Entity('lab_requests')
@ObjectType()
export class LabRequest {
  @Field(()=> GraphQLUUID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Doctor)
  @ManyToOne(() => Doctor, { nullable: true })
  @JoinColumn({ name: 'doctor_id' })
  doctor: Doctor;

  @Field(() => Patient)
  @ManyToOne(() => Patient, { nullable: false })
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @Field()
  @Column({ type: 'text', nullable: false })
  type: string;

  @Field(() => Priority)
  @Column({ type: 'enum',enum:Priority, nullable: true })
  priority: Priority;

  @Field()
  @Column({ type: 'text', nullable: true })
  description: string;
}

