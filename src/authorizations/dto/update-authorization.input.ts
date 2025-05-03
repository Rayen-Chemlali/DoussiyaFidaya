// update-authorization.dto.ts
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsUUID, IsEnum, IsOptional } from 'class-validator';
import { CreateAuthorizationInput } from './create-authorization.input';
import { AuthorizationLevel } from '../entities/authorization.entity';

@InputType()
export class UpdateAuthorizationInput extends PartialType(CreateAuthorizationInput) {
  @Field(() => String, { 
    description: 'New medical institute ID (optional)',
    nullable: true 
  })
  @IsUUID()
  @IsOptional()
  institut_medical_id?: string;

  @Field(() => AuthorizationLevel, { 
    description: 'Updated authorization level (optional)', 
    nullable: true 
  })
  @IsEnum(AuthorizationLevel)
  @IsOptional()
  level?: AuthorizationLevel;
}
