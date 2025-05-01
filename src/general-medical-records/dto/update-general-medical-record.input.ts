import { CreateGeneralMedicalRecordInput } from './create-general-medical-record.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGeneralMedicalRecordInput extends PartialType(CreateGeneralMedicalRecordInput) {
  @Field(() => Int)
  id: number;
}
