import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString, IsArray } from 'class-validator';


@InputType()
export class UpdateGeneralMedicalRecordInput {
  
  @Field(() => [String], { nullable: true, description: 'Allergies to add' })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  addAllergies?: string[];

  @Field(() => [String], { nullable: true, description: 'Allergies to remove' })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  removeAllergies?: string[];
}

