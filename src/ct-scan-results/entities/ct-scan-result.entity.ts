import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CtScanResult {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
