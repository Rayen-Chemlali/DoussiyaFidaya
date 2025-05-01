import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class LabAttachment {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
