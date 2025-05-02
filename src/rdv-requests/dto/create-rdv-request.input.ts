import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRdvRequestInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
