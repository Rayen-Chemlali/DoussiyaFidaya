import { Entity, Column } from 'typeorm';
import { InstitutMedical } from './institut-medical.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity('cliniques')
@ObjectType({implements: InstitutMedical})
export class Clinique extends InstitutMedical {
  @Field()
  @Column({ type: 'text', nullable: false })
  name: string;

  @Field()
  @Column({ type: 'text', nullable: true })
  address: string;

  @Field()
  @Column({ type: 'text', nullable: true })
  phone: string;

  @Field()
  @Column({ type: 'text', nullable: true })
  email: string;
}