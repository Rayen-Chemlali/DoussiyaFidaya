import { Entity, Column } from 'typeorm';
import { InstitutMedical } from './institut-medical.entity';

@Entity('hopitaux')
export class Hopital extends InstitutMedical {
  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'text', nullable: true })
  address: string;

  @Column({ type: 'text', nullable: true })
  phone: string;

  @Column({ type: 'text', nullable: true })
  email: string;
}