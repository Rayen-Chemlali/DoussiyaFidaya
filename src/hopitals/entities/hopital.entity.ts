import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Hopital {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
