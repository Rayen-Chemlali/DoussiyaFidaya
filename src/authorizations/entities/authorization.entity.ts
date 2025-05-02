import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { InstitutMedical } from '../../institut-medicals/entities/institut-medical.entity';
import { Patient } from '../../patients/entities/patient.entity';
export enum AuthorizationLevel {
  GENERAL = 'general',
  SPECIALITY = 'speciality',
  FULL_ACCESS = 'full_access',
}

registerEnumType(AuthorizationLevel, {
  name: 'AuthorizationLevel',
  description: "Le niveau d'acces pour un medecin au dossier medical d'un patient",
})
@Entity('authorizations')
@ObjectType()
export class Authorization {
  @Field(() => GraphQLUUID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => InstitutMedical)
  @ManyToOne(() => InstitutMedical, { nullable: true })
  @JoinColumn({ name: 'institut_medical_id' })
  institut_medical: InstitutMedical;

  @Field(() => Patient)
  @ManyToOne(() => Patient, { nullable: false })
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @Field(() => AuthorizationLevel )
  @Column({ type: 'enum',enum:AuthorizationLevel, nullable: false })
  level: AuthorizationLevel;
}

