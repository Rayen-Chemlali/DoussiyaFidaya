import { Entity, PrimaryGeneratedColumn, Column, Inheritance } from 'typeorm';

@Entity('instituts_medicaux')
@Inheritance({ column: { name: 'type', type: 'text' } })
export abstract class InstitutMedical {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: false })
  type: string; // Discriminateur : 'Doctor', 'Clinique', 'Hopital'
}