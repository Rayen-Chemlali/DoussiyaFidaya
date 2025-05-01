import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { GeneralMedicalRecord } from './general-medical-record.entity';
import { Field, GraphQLISODateTime, ObjectType, registerEnumType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
export enum Gender {
  MALE='Male',
  FEMALE='Female'
}

registerEnumType(Gender,{
  name:'Gender',
  description:'The gender of the patient',
})
@Entity('patients')
@ObjectType()
export class Patient {
  @Field(() => GraphQLUUID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Number)
  @Column({ type: 'integer', unique: true, nullable: true })
  cin: number;

  @Field(() => GraphQLISODateTime)
  @Column({ type: 'timestamp with time zone', nullable: false })
  date_of_birth: Date;

  @Field(()=> Gender)
  @Column({ type: 'enum',enum:Gender, nullable: false })
  gender: Gender;

  @Field()
  @Column({ type: 'text', nullable: true })
  profile_image: string;

  @Field(()=>GeneralMedicalRecord)
  @OneToOne(() => GeneralMedicalRecord, { nullable: true })
  @JoinColumn({ name: 'general_medical_record_id' })
  general_medical_record: GeneralMedicalRecord;

  @Field(() => User)
  @OneToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_id' })
  user: User;
}

