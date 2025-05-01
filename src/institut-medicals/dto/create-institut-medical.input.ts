import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInstitutMedicalInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
