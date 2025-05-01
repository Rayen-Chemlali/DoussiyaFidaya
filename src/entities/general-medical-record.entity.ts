import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { ObjectType } from '@nestjs/graphql';

@Entity('GeneralMedicalRecords')
@ObjectType()
export class GeneralMedicalRecord {}