import { Entity, PrimaryGeneratedColumn, Column, Inheritance } from 'typeorm';
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

@Entity('instituts_medicaux')
@Inheritance({ column: { name: 'type', type: 'text' } })
@ObjectType()
export abstract class InstitutMedical {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => GraphQLUUID)
  id: string;

  @Field(()=> InstitutMedicalType)
  @Column({ type:'enum',enum: InstitutMedicalType, nullable: false })
  type: InstitutMedicalType; // Discriminateur : 'Doctor', 'Clinique', 'Hopital'
}

export enum InstitutMedicalType {
  DOCTOR = 'doctor',
  CLINIQUE = 'clinique',
  HOPITAL = 'hopital',
}
registerEnumType(InstitutMedicalType, {
  name: 'InstitutMedicalType',
  description: "Le type d'institut medical",
})