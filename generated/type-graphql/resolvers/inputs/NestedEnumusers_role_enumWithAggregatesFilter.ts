import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumusers_role_enumFilter } from "../inputs/NestedEnumusers_role_enumFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { users_role_enum } from "../../enums/users_role_enum";

@TypeGraphQL.InputType("NestedEnumusers_role_enumWithAggregatesFilter", {})
export class NestedEnumusers_role_enumWithAggregatesFilter {
  @TypeGraphQL.Field(_type => users_role_enum, {
    nullable: true
  })
  equals?: "ADMIN" | "DOCTOR" | "PATIENT" | "LABORATORY" | "HOSPITAL" | "CLINIC" | undefined;

  @TypeGraphQL.Field(_type => [users_role_enum], {
    nullable: true
  })
  in?: Array<"ADMIN" | "DOCTOR" | "PATIENT" | "LABORATORY" | "HOSPITAL" | "CLINIC"> | undefined;

  @TypeGraphQL.Field(_type => [users_role_enum], {
    nullable: true
  })
  notIn?: Array<"ADMIN" | "DOCTOR" | "PATIENT" | "LABORATORY" | "HOSPITAL" | "CLINIC"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumusers_role_enumWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumusers_role_enumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumusers_role_enumFilter, {
    nullable: true
  })
  _min?: NestedEnumusers_role_enumFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumusers_role_enumFilter, {
    nullable: true
  })
  _max?: NestedEnumusers_role_enumFilter | undefined;
}
