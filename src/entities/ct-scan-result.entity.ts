import { Entity } from 'typeorm';
import { LabResult } from './lab-result.entity';
import { ObjectType } from '@nestjs/graphql';

@Entity('ctscan_results')
@ObjectType({implements: LabResult})
export class CTScanResult extends LabResult {}