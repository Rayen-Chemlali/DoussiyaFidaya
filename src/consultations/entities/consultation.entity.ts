import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Consultation {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
