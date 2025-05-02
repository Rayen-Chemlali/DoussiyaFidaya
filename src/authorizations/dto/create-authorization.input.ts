
import { InputType, Field } from '@nestjs/graphql';
import { IsUUID, IsEnum, IsOptional } from 'class-validator';
import { AuthorizationLevel } from '../entities/authorization.entity';

@InputType()
export class CreateAuthorizationInput {
  @Field(() => String, { 
    description: 'ID of the medical institute (optional)',
    nullable: true 
  })
  @IsUUID()
  @IsOptional()
  institut_medical_id?: string;

  @Field(() => AuthorizationLevel, { 
    description: 'Authorization level for medical records' 
  })
  @IsEnum(AuthorizationLevel)
  level: AuthorizationLevel;
}