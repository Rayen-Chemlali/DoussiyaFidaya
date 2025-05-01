import { Entity } from 'typeorm';
import { LabResult } from './lab-result.entity';
import { ObjectType } from '@nestjs/graphql';

@Entity('xray_results')
@ObjectType()
export class XRayResult extends LabResult {}