import { Entity } from 'typeorm';
import { LabResult } from './lab-result.entity';

@Entity('ctscan_results')
export class CTScanResult extends LabResult {}