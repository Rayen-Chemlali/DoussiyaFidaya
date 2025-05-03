import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumxray_results_result_type_enumFilter } from "../inputs/NestedEnumxray_results_result_type_enumFilter";
import { NestedEnumxray_results_result_type_enumWithAggregatesFilter } from "../inputs/NestedEnumxray_results_result_type_enumWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { xray_results_result_type_enum } from "../../enums/xray_results_result_type_enum";

@TypeGraphQL.InputType("Enumxray_results_result_type_enumWithAggregatesFilter", {})
export class Enumxray_results_result_type_enumWithAggregatesFilter {
  @TypeGraphQL.Field(_type => xray_results_result_type_enum, {
    nullable: true
  })
  equals?: "analysis" | "xray" | "ctscan" | undefined;

  @TypeGraphQL.Field(_type => [xray_results_result_type_enum], {
    nullable: true
  })
  in?: Array<"analysis" | "xray" | "ctscan"> | undefined;

  @TypeGraphQL.Field(_type => [xray_results_result_type_enum], {
    nullable: true
  })
  notIn?: Array<"analysis" | "xray" | "ctscan"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumxray_results_result_type_enumWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumxray_results_result_type_enumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumxray_results_result_type_enumFilter, {
    nullable: true
  })
  _min?: NestedEnumxray_results_result_type_enumFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumxray_results_result_type_enumFilter, {
    nullable: true
  })
  _max?: NestedEnumxray_results_result_type_enumFilter | undefined;
}
