import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGeneralMedicalRecordInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
