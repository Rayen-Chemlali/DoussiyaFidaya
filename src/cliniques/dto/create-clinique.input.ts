import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCliniqueInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
