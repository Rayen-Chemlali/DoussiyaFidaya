import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { authorizations_level_enum } from "../../enums/authorizations_level_enum";

@TypeGraphQL.ObjectType("AuthorizationsMinAggregate", {})
export class AuthorizationsMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => authorizations_level_enum, {
    nullable: true
  })
  level!: "READ" | "WRITE" | "ADMIN" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  institut_medical_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  patient_id!: string | null;
}
