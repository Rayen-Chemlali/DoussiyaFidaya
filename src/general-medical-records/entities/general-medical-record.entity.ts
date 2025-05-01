import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class GeneralMedicalRecord {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
