import { CreateAnalysisResultInput } from './create-analysis-result.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAnalysisResultInput extends PartialType(CreateAnalysisResultInput) {
  @Field(() => Int)
  id: number;
}
