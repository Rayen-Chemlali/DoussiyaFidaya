import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

@Entity('GeneralMedicalRecords')
@ObjectType()
export class GeneralMedicalRecord {
  @Field(()=> GraphQLUUID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => [String])
  @Column({ type: 'text',array:true, nullable: true })
  allergies: string[];
}