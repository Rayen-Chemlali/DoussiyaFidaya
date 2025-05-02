import { Entity, Column } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { InstitutMedical } from '../../institut-medicals/entities/institut-medical.entity';

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