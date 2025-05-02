import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString, IsArray } from 'class-validator';

@InputType()
export class CreateGeneralMedicalRecordInput {
  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  allergies?: string[];
}
