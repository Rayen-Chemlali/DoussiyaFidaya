import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateNestedManyWithoutUsersInput } from "../inputs/DoctorsCreateNestedManyWithoutUsersInput";
import { Verification_tokensCreateNestedOneWithoutUserInput } from "../inputs/Verification_tokensCreateNestedOneWithoutUserInput";
import { users_role_enum } from "../../enums/users_role_enum";

@TypeGraphQL.InputType("UsersCreateWithoutPatientsInput", {})
export class UsersCreateWithoutPatientsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_verified!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  salt!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_login?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profile_picture?: string | undefined;

  @TypeGraphQL.Field(_type => users_role_enum, {
    nullable: false
  })
  role!: "ADMIN" | "DOCTOR" | "PATIENT" | "LABORATORY" | "HOSPITAL" | "CLINIC";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  associated_id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Verification_tokensCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  validation_token?: Verification_tokensCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateNestedManyWithoutUsersInput, {
    nullable: true
  })
  doctors?: DoctorsCreateNestedManyWithoutUsersInput | undefined;
}
