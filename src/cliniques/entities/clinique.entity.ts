import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Clinique {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
