import { CreateInstitutMedicalInput } from './create-institut-medical.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInstitutMedicalInput extends PartialType(CreateInstitutMedicalInput) {
  @Field(() => Int)
  id: number;
}
