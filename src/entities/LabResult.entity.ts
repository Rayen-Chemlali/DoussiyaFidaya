import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Inheritance } from 'typeorm';
import { LabDocument } from './lab-document.entity';

@Entity('lab_results')
@Inheritance({ column: { name: 'result_type', type: 'text' } })
export abstract class LabResult {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => LabDocument, labDocument => labDocument.results, { nullable: false })
  @JoinColumn({ name: 'lab_document_id' })
  lab_document: LabDocument;

  @Column({ type: 'boolean', nullable: false })
  is_abnormal: boolean;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: false })
  title: string;

  @Column({ type: 'text', nullable: false })
  result_type: string; // Discriminateur : 'Analysis', 'XRay', 'CTScan'
}