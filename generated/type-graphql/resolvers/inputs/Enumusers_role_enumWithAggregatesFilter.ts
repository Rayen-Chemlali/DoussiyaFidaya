import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumusers_role_enumFilter } from "../inputs/NestedEnumusers_role_enumFilter";
import { NestedEnumusers_role_enumWithAggregatesFilter } from "../inputs/NestedEnumusers_role_enumWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { users_role_enum } from "../../enums/users_role_enum";

@TypeGraphQL.InputType("Enumusers_role_enumWithAggregatesFilter", {})
export class Enumusers_role_enumWithAggregatesFilter {
  @TypeGraphQL.Field(_type => users_role_enum, {
    nullable: true
  })
  equals?: "Patient" | "Doctor" | "Pharmacy" | "Laboratory" | "Insurance" | "Assistant" | "Admin" | undefined;

  @TypeGraphQL.Field(_type => [users_role_enum], {
    nullable: true
  })
  in?: Array<"Patient" | "Doctor" | "Pharmacy" | "Laboratory" | "Insurance" | "Assistant" | "Admin"> | undefined;

  @TypeGraphQL.Field(_type => [users_role_enum], {
    nullable: true
  })
  notIn?: Array<"Patient" | "Doctor" | "Pharmacy" | "Laboratory" | "Insurance" | "Assistant" | "Admin"> | undefined;

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
