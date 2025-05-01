import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { LabDocument } from './lab-document.entity';
import { Field, InterfaceType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
export enum LabResultType {
  ANALYSIS = 'analysis',
  XRAY = 'xray',
  CTSCAN = 'ctscan',
}

registerEnumType(LabResultType, {
  name: 'LabResultType',
  description: "Le type de résultat d'analyse",
})
@InterfaceType()
@Entity('lab_results')
export abstract class LabResult {
  @Field(() => GraphQLUUID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => LabDocument)
  @ManyToOne(() => LabDocument, labDocument => labDocument.results, { nullable: false })
  @JoinColumn({ name: 'lab_document_id' })
  lab_document: LabDocument;

  @Field(() => Boolean)
  @Column({ type: 'boolean', nullable: false })
  is_abnormal: boolean;

  @Field()
  @Column({ type: 'text', nullable: true })
  description: string;

  @Field()
  @Column({ type: 'text', nullable: false })
  title: string;

  @Field(() => LabResultType)
  @Column({ type: 'enum',enum:LabResultType, nullable: false })
  result_type: LabResultType; // Discriminateur : 'Analysis', 'XRay', 'CTScan'
}

