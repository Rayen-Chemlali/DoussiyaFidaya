import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';
import { Field, GraphQLISODateTime, ObjectType, registerEnumType } from '@nestjs/graphql';
import { GraphQLEmailAddress, GraphQLPhoneNumber, GraphQLUUID } from 'graphql-scalars';
import { Patient } from '../../patients/entities/patient.entity';
import { Doctor } from '../../doctors/entities/doctor.entity';

export enum Role {
  Patient = 'Patient',
  Doctor = 'Doctor',
  Pharmacy = 'Pharmacy',
  Laboratory = 'Laboratory',
  Insurance = 'Insurance',
  Assistant = 'Assistant',
  Admin = 'Admin',
}
registerEnumType(Role, {
  name: 'Role',
  description: 'The role of the user in the system',
})

@Entity('users')
@ObjectType()
export class User {
  @Field(() => GraphQLUUID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'text', nullable: true })
  address: string;

  @Field(() => GraphQLISODateTime)
  @CreateDateColumn({ nullable: false })
  created_at: Date;

  @Field(()=> GraphQLEmailAddress)
  @Column({ type: 'text', unique: true, nullable: false })
  email: string;

  @Field()
  @Column({ type: 'text', nullable: false })
  first_name: string;

  @Field()
  @Column({ type: 'text', nullable: false })
  last_name: string;

  @Field(()=> Boolean)
  @Column({ type: 'boolean', nullable: false })
  is_verified: boolean;

  @Field(() => GraphQLISODateTime)
  @Column({ type: 'timestamp with time zone', nullable: true })
  last_login: Date;

  @Field(() => GraphQLPhoneNumber)
  @Column({ type: 'text', nullable: true })
  phone: string;

  @Field()
  @Column({ type: 'text', nullable: true })
  profile_picture: string;

  @Field(() => Role)
  @Column({ type: 'enum', enum: Role, nullable: false })
  role: Role;

  @Field(() => GraphQLUUID)
  @Column({ type: 'uuid', nullable: true })
  associated_id: string;
/*
  @Column({ type: 'text', nullable: true })
  specialization: string;
*/
  @UpdateDateColumn({ nullable: false })
  updated_at: Date;

  @OneToOne(() => Patient, patient => patient.user)
  patient: Patient;
  
  @OneToOne(() => Doctor, doctor => doctor.user)
  doctor: Doctor;
}