import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateXrayResultInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
