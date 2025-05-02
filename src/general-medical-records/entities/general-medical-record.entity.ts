import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID, GraphQLDate } from 'graphql-scalars';
import { Patient } from 'src/patients/entities/patient.entity';

@Entity('GeneralMedicalRecords')
@ObjectType()
export class GeneralMedicalRecord {
  @Field(() => GraphQLUUID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => [String], { nullable: true })
  @Column({ type: 'text', array: true, nullable: true })
  allergies: string[];

  @Field({ nullable: true })
  @Column({ nullable: true })
  bloodType?: string;

  @Field(() => GraphQLDate, { nullable: true })
  @Column({ type: 'date', nullable: true })
  birthDate?: Date;

  @Field({ nullable: true })
  @Column({ type: 'float', nullable: true })
  height?: number;

  @Field({ nullable: true })
  @Column({ type: 'float', nullable: true })
  weight?: number;

  @Field(() => Patient)
  @OneToOne(() => Patient, { nullable: false })
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;


}
