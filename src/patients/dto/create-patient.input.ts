import { InputType, Field } from '@nestjs/graphql';
import { GraphQLISODateTime } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { Gender } from '../entities/patient.entity';

@InputType()
export class CreatePatientInput {
  @Field(() => Number, { nullable: true })
  cin?: number;

  @Field(() => GraphQLISODateTime)
  date_of_birth: Date;

  @Field(() => Gender)
  gender: Gender;

  @Field({ nullable: true })
  profile_image?: string;

  @Field(() => GraphQLUUID, { nullable: true })
  general_medical_recordId?: string;

  @Field(() => GraphQLUUID, { nullable: true })
  userId?: string;
}
