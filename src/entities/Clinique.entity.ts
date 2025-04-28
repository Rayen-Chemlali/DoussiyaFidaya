import { Entity, Column } from 'typeorm';
import { InstitutMedical } from './institut-medical.entity';

@Entity('cliniques')
export class Clinique extends InstitutMedical {
  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'text', nullable: true })
  address: string;

  @Column({ type: 'text', nullable: true })
  phone: string;

  @Column({ type: 'text', nullable: true })
  email: string;
}