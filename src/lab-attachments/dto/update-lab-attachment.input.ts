import { CreateLabAttachmentInput } from './create-lab-attachment.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLabAttachmentInput extends PartialType(CreateLabAttachmentInput) {
  @Field(() => Int)
  id: number;
}
