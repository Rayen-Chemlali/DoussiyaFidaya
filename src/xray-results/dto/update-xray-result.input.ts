import { CreateXrayResultInput } from './create-xray-result.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateXrayResultInput extends PartialType(CreateXrayResultInput) {
  @Field(() => Int)
  id: number;
}
