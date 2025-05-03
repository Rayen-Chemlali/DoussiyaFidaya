import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString, IsArray, IsDate, IsNumber } from 'class-validator';


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

