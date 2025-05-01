import { CreateRdvInput } from './create-rdv.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRdvInput extends PartialType(CreateRdvInput) {
  @Field(() => Int)
  id: number;
}
