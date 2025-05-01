import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLabDocumentInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
