import { CreateCtScanResultInput } from './create-ct-scan-result.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCtScanResultInput extends PartialType(CreateCtScanResultInput) {
  @Field(() => Int)
  id: number;
}
