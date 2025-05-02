import { Entity } from 'typeorm';
import { ObjectType } from '@nestjs/graphql';
import { LabResult } from '../../lab-results/entities/lab-result.entity';

@Entity('ctscan_results')
@ObjectType({implements: LabResult})
export class CTScanResult extends LabResult {}