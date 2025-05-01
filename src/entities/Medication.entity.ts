import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Prescription } from './prescription.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

@Entity('medications')
@ObjectType()
export class Medication {
  @Field(() => GraphQLUUID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Prescription)
  @ManyToOne(() => Prescription, prescription => prescription.medications, { nullable: false })
  @JoinColumn({ name: 'prescription_id' })
  prescription: Prescription;

  @Field()
  @Column({ type: 'text', nullable: false })
  dosage: string;

  @Field()
  @Column({ type: 'text', nullable: false })
  duration: string;

  @Field()
  @Column({ type: 'text', nullable: false })
  frequency: string;

  @Field()
  @Column({ type: 'text', nullable: false })
  name: string;

  @Field(()=> Int)
  @Column({ type: 'float', nullable: false })
  quantity: number;
}