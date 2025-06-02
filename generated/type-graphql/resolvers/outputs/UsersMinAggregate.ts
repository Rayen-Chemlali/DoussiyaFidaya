import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { users_role_enum } from "../../enums/users_role_enum";

@TypeGraphQL.ObjectType("UsersMinAggregate", {})
export class UsersMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  first_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  last_name!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  is_verified!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salt!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_login!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profile_picture!: string | null;

  @TypeGraphQL.Field(_type => users_role_enum, {
    nullable: true
  })
  role!: "Patient" | "Doctor" | "Pharmacy" | "Laboratory" | "Insurance" | "Assistant" | "Admin" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  associated_id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at!: Date | null;
}
