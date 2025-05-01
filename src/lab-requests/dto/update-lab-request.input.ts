import { CreateLabRequestInput } from './create-lab-request.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLabRequestInput extends PartialType(CreateLabRequestInput) {
  @Field(() => Int)
  id: number;
}
