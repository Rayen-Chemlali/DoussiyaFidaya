import { CreateRdvRequestInput } from './create-rdv-request.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRdvRequestInput extends PartialType(CreateRdvRequestInput) {
  @Field(() => Int)
  id: number;
}
