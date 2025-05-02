import { Entity } from 'typeorm';
import { ObjectType } from '@nestjs/graphql';
import { LabResult } from '../../lab-results/entities/lab-result.entity';

@Entity('xray_results')
@ObjectType({implements: LabResult})
export class XRayResult extends LabResult {}