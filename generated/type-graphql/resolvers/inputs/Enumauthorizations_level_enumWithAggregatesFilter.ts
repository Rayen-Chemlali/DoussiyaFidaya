import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumauthorizations_level_enumFilter } from "../inputs/NestedEnumauthorizations_level_enumFilter";
import { NestedEnumauthorizations_level_enumWithAggregatesFilter } from "../inputs/NestedEnumauthorizations_level_enumWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { authorizations_level_enum } from "../../enums/authorizations_level_enum";

@TypeGraphQL.InputType("Enumauthorizations_level_enumWithAggregatesFilter", {})
export class Enumauthorizations_level_enumWithAggregatesFilter {
  @TypeGraphQL.Field(_type => authorizations_level_enum, {
    nullable: true
  })
  equals?: "general" | "speciality" | "full_access" | undefined;

  @TypeGraphQL.Field(_type => [authorizations_level_enum], {
    nullable: true
  })
  in?: Array<"general" | "speciality" | "full_access"> | undefined;

  @TypeGraphQL.Field(_type => [authorizations_level_enum], {
    nullable: true
  })
  notIn?: Array<"general" | "speciality" | "full_access"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumauthorizations_level_enumWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumauthorizations_level_enumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumauthorizations_level_enumFilter, {
    nullable: true
  })
  _min?: NestedEnumauthorizations_level_enumFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumauthorizations_level_enumFilter, {
    nullable: true
  })
  _max?: NestedEnumauthorizations_level_enumFilter | undefined;
}
