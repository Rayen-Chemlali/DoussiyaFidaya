import { Entity, Column } from 'typeorm';
import { LabResult } from './lab-result.entity';

@Entity('analysis_results')
export class AnalysisResult extends LabResult {
  @Column({ type: 'text', nullable: false })
  reference_range: string;

  @Column({ type: 'text', nullable: false })
  unit: string;

  @Column({ type: 'text', nullable: false })
  value: string;
}
