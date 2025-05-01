import { CreateHopitalInput } from './create-hopital.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHopitalInput extends PartialType(CreateHopitalInput) {
  @Field(() => Int)
  id: number;
}
