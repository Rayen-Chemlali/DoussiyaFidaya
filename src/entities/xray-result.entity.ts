import { Entity } from 'typeorm';
import { LabResult } from './lab-result.entity';
import { ObjectType } from '@nestjs/graphql';

@Entity('xray_results')
@ObjectType({implements: LabResult})
export class XRayResult extends LabResult {}