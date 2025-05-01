import { CreateCliniqueInput } from './create-clinique.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCliniqueInput extends PartialType(CreateCliniqueInput) {
  @Field(() => Int)
  id: number;
}
