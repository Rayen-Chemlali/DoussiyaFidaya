import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class AnalysisResult {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
