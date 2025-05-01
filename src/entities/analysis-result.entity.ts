import { Entity, Column } from 'typeorm';
import { LabResult } from './lab-result.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity('analysis_results')
@ObjectType()
export class AnalysisResult extends LabResult {
  @Field()
  @Column({ type: 'text', nullable: false })
  reference_range: string;

  @Field()
  @Column({ type: 'text', nullable: false })
  unit: string;

  @Field(() => Number)
  @Column({ type: 'text', nullable: false })
  value: number;
}
