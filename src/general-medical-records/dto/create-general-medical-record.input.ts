import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString, IsArray, IsDate, IsNumber } from 'class-validator';

@InputType()
export class CreateGeneralMedicalRecordInput {
  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  allergies?: string[];


  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  bloodType?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsDate()
  birthDate?: Date;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  height?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  weight?: number;
}
