import { CreateLabDocumentInput } from './create-lab-document.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLabDocumentInput extends PartialType(CreateLabDocumentInput) {
  @Field(() => Int)
  id: number;
}
