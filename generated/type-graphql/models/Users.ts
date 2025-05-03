import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Doctors } from "../models/Doctors";
import { Patients } from "../models/Patients";
import { users_role_enum } from "../enums/users_role_enum";

@TypeGraphQL.ObjectType("Users", {})
export class Users {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

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

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_login?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profile_picture?: string | null;

  @TypeGraphQL.Field(_type => users_role_enum, {
    nullable: false
  })
  role!: "Patient" | "Doctor" | "Pharmacy" | "Laboratory" | "Insurance" | "Assistant" | "Admin";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  associated_id?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  doctors?: Doctors | null;

  patients?: Patients | null;
}
