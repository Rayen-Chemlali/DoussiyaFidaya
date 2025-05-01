import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Patient } from './patient.entity';
import { Medication } from './medication.entity';
import { Doctor } from './doctor.entity';
import { Field, GraphQLISODateTime, ObjectType, registerEnumType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

export enum PrescriptionStatus {
  PENDING = 'Pending',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
}

registerEnumType(PrescriptionStatus, {
  name: 'PrescriptionStatus',
  description: 'The status of the prescription',
})

@Entity('prescriptions')
@ObjectType()
export class Prescription {
  @Field(() => GraphQLUUID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => GraphQLISODateTime)
  @Column({ type: 'timestamp with time zone', nullable: false })
  date: Date;

  @Field(() => Doctor)
  @ManyToOne(() => Doctor, { nullable: true })
  @JoinColumn({ name: 'doctor_id' })
  doctor: Doctor;

  @Field()
  @Column({ type: 'text', nullable: true })
  instructions: string;

  @Field(() => Boolean)
  @Column({ type: 'boolean', nullable: false })
  is_signed: boolean;

  @Field()
  @Column({ type: 'text', nullable: true })
  section: string;

  @Field(() => Patient)
  @ManyToOne(() => Patient, { nullable: false })
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @Field(() => PrescriptionStatus)
  @Column({ type: 'enum',enum:PrescriptionStatus, nullable: false })
  status: PrescriptionStatus;

  @Field(() => GraphQLISODateTime)
  @UpdateDateColumn({ nullable: false })
  updated_at: Date;

  @Field(() => [Medication])
  @OneToMany(() => Medication, medication => medication.prescription)
  medications: Medication[];
}

