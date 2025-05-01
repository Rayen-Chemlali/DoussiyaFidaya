import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class LabRequest {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
