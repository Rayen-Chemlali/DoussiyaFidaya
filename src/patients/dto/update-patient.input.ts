import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreatePatientInput } from './create-patient.input';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class UpdatePatientInput extends PartialType(CreatePatientInput) {
  
}
