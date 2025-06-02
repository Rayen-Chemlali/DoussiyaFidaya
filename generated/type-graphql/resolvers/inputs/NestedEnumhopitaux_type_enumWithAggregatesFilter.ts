import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumhopitaux_type_enumFilter } from "../inputs/NestedEnumhopitaux_type_enumFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { hopitaux_type_enum } from "../../enums/hopitaux_type_enum";

@TypeGraphQL.InputType("NestedEnumhopitaux_type_enumWithAggregatesFilter", {})
export class NestedEnumhopitaux_type_enumWithAggregatesFilter {
  @TypeGraphQL.Field(_type => hopitaux_type_enum, {
    nullable: true
  })
  equals?: "PUBLIC" | "PRIVATE" | undefined;

  @TypeGraphQL.Field(_type => [hopitaux_type_enum], {
    nullable: true
  })
  in?: Array<"PUBLIC" | "PRIVATE"> | undefined;

  @TypeGraphQL.Field(_type => [hopitaux_type_enum], {
    nullable: true
  })
  notIn?: Array<"PUBLIC" | "PRIVATE"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumhopitaux_type_enumWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumhopitaux_type_enumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumhopitaux_type_enumFilter, {
    nullable: true
  })
  _min?: NestedEnumhopitaux_type_enumFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumhopitaux_type_enumFilter, {
    nullable: true
  })
  _max?: NestedEnumhopitaux_type_enumFilter | undefined;
}
