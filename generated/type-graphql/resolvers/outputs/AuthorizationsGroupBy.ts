import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsCountAggregate } from "../outputs/AuthorizationsCountAggregate";
import { AuthorizationsMaxAggregate } from "../outputs/AuthorizationsMaxAggregate";
import { AuthorizationsMinAggregate } from "../outputs/AuthorizationsMinAggregate";
import { authorizations_level_enum } from "../../enums/authorizations_level_enum";

@TypeGraphQL.ObjectType("AuthorizationsGroupBy", {})
export class AuthorizationsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => authorizations_level_enum, {
    nullable: false
  })
  level!: "general" | "speciality" | "full_access";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  institut_medical_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patient_id!: string;

  @TypeGraphQL.Field(_type => AuthorizationsCountAggregate, {
    nullable: true
  })
  _count!: AuthorizationsCountAggregate | null;

  @TypeGraphQL.Field(_type => AuthorizationsMinAggregate, {
    nullable: true
  })
  _min!: AuthorizationsMinAggregate | null;

  @TypeGraphQL.Field(_type => AuthorizationsMaxAggregate, {
    nullable: true
  })
  _max!: AuthorizationsMaxAggregate | null;
}
