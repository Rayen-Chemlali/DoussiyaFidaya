import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHopitalInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
