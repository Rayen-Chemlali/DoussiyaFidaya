import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnuminstituts_medicaux_type_enumFilter } from "../inputs/NestedEnuminstituts_medicaux_type_enumFilter";
import { NestedEnuminstituts_medicaux_type_enumWithAggregatesFilter } from "../inputs/NestedEnuminstituts_medicaux_type_enumWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { instituts_medicaux_type_enum } from "../../enums/instituts_medicaux_type_enum";

@TypeGraphQL.InputType("Enuminstituts_medicaux_type_enumWithAggregatesFilter", {})
export class Enuminstituts_medicaux_type_enumWithAggregatesFilter {
  @TypeGraphQL.Field(_type => instituts_medicaux_type_enum, {
    nullable: true
  })
  equals?: "CLINIC" | "HOSPITAL" | "LABORATORY" | undefined;

  @TypeGraphQL.Field(_type => [instituts_medicaux_type_enum], {
    nullable: true
  })
  in?: Array<"CLINIC" | "HOSPITAL" | "LABORATORY"> | undefined;

  @TypeGraphQL.Field(_type => [instituts_medicaux_type_enum], {
    nullable: true
  })
  notIn?: Array<"CLINIC" | "HOSPITAL" | "LABORATORY"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnuminstituts_medicaux_type_enumWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnuminstituts_medicaux_type_enumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnuminstituts_medicaux_type_enumFilter, {
    nullable: true
  })
  _min?: NestedEnuminstituts_medicaux_type_enumFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnuminstituts_medicaux_type_enumFilter, {
    nullable: true
  })
  _max?: NestedEnuminstituts_medicaux_type_enumFilter | undefined;
}
