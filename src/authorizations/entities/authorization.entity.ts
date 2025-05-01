import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Authorization {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
