import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumctscan_results_result_type_enumFilter } from "../inputs/NestedEnumctscan_results_result_type_enumFilter";
import { NestedEnumctscan_results_result_type_enumWithAggregatesFilter } from "../inputs/NestedEnumctscan_results_result_type_enumWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ctscan_results_result_type_enum } from "../../enums/ctscan_results_result_type_enum";

@TypeGraphQL.InputType("Enumctscan_results_result_type_enumWithAggregatesFilter", {})
export class Enumctscan_results_result_type_enumWithAggregatesFilter {
  @TypeGraphQL.Field(_type => ctscan_results_result_type_enum, {
    nullable: true
  })
  equals?: "analysis" | "xray" | "ctscan" | undefined;

  @TypeGraphQL.Field(_type => [ctscan_results_result_type_enum], {
    nullable: true
  })
  in?: Array<"analysis" | "xray" | "ctscan"> | undefined;

  @TypeGraphQL.Field(_type => [ctscan_results_result_type_enum], {
    nullable: true
  })
  notIn?: Array<"analysis" | "xray" | "ctscan"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumctscan_results_result_type_enumWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumctscan_results_result_type_enumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumctscan_results_result_type_enumFilter, {
    nullable: true
  })
  _min?: NestedEnumctscan_results_result_type_enumFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumctscan_results_result_type_enumFilter, {
    nullable: true
  })
  _max?: NestedEnumctscan_results_result_type_enumFilter | undefined;
}
