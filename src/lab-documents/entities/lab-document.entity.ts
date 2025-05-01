import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class LabDocument {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
