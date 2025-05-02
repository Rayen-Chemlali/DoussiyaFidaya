import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne, ManyToMany, JoinTable } from 'typeorm';

import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
import { GraphQLUUID } from 'graphql-scalars';
import { Doctor } from '../../doctors/entities/doctor.entity';
import { InstitutMedical } from '../../institut-medicals/entities/institut-medical.entity';
import { Prescription } from '../../prescriptions/entities/prescription.entity';
import { Patient } from '../../patients/entities/patient.entity';
import { LabRequest } from '../../lab-requests/entities/lab-request.entity';

@Entity('consultations')
@ObjectType()
export class Consultation {
  @Field(()=> GraphQLUUID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column({ type: 'text', nullable: true })
  section: string;

  @Field(() => GraphQLISODateTime)
  @Column({ type: 'timestamp with time zone', nullable: false })
  date: Date;

  @Field(() => [String])
  @Column({ type: 'text', array: true, nullable: true })
  notes: string[];

  @Field(() => GraphQLJSON)
  @Column({ type: 'jsonb', nullable: true })
  measures: object;

  @Field(() => Doctor)
  @ManyToOne(() => Doctor, { nullable: true })
  @JoinColumn({ name: 'doctor_id' })
  doctor: Doctor;

  @Field(() => InstitutMedical)
  @ManyToOne(() => InstitutMedical, { nullable: true })
  @JoinColumn({ name: 'institut_medical_id' })
  institut_medical: InstitutMedical;

  @Field(() => Prescription)
  @OneToOne(() => Prescription, { nullable: true })
  @JoinColumn({ name: 'prescription_id' })
  prescription: Prescription;

  @Field(() => Patient)
  @ManyToOne(() => Patient, { nullable: false })
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @Field(() => [LabRequest])
  @ManyToMany(() => LabRequest)
  @JoinTable({
    name: 'consultation_lab_requests',
    joinColumn: { name: 'consultation_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'lab_request_id', referencedColumnName: 'id' },
  })
  lab_requests: LabRequest[];
}