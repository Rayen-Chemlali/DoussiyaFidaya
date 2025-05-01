import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class XrayResult {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
