import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLabAttachmentInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
