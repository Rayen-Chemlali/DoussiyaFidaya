import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLabRequestInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
