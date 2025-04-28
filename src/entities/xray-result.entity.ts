import { Entity } from 'typeorm';
import { LabResult } from './lab-result.entity';

@Entity('xray_results')
export class XRayResult extends LabResult {}