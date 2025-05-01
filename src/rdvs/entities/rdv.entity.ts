import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Rdv {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
