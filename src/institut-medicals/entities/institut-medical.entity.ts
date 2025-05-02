import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Field, InterfaceType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
export enum InstitutMedicalType {
  DOCTOR = 'doctor',
  CLINIQUE = 'clinique',
  HOPITAL = 'hopital',
}
registerEnumType(InstitutMedicalType, {
  name: 'InstitutMedicalType',
  description: "Le type d'institut medical",
})
@InterfaceType()
@Entity('instituts_medicaux')
export abstract class InstitutMedical {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => GraphQLUUID)
  id: string;

  @Field(()=> InstitutMedicalType)
  @Column({ type:'enum',enum: InstitutMedicalType, nullable: false })
  type: InstitutMedicalType; // Discriminateur : 'Doctor', 'Clinique', 'Hopital'
}

