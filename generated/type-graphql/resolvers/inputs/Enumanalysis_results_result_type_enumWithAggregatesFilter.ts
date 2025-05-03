import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumanalysis_results_result_type_enumFilter } from "../inputs/NestedEnumanalysis_results_result_type_enumFilter";
import { NestedEnumanalysis_results_result_type_enumWithAggregatesFilter } from "../inputs/NestedEnumanalysis_results_result_type_enumWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { analysis_results_result_type_enum } from "../../enums/analysis_results_result_type_enum";

@TypeGraphQL.InputType("Enumanalysis_results_result_type_enumWithAggregatesFilter", {})
export class Enumanalysis_results_result_type_enumWithAggregatesFilter {
  @TypeGraphQL.Field(_type => analysis_results_result_type_enum, {
    nullable: true
  })
  equals?: "analysis" | "xray" | "ctscan" | undefined;

  @TypeGraphQL.Field(_type => [analysis_results_result_type_enum], {
    nullable: true
  })
  in?: Array<"analysis" | "xray" | "ctscan"> | undefined;

  @TypeGraphQL.Field(_type => [analysis_results_result_type_enum], {
    nullable: true
  })
  notIn?: Array<"analysis" | "xray" | "ctscan"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumanalysis_results_result_type_enumWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumanalysis_results_result_type_enumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumanalysis_results_result_type_enumFilter, {
    nullable: true
  })
  _min?: NestedEnumanalysis_results_result_type_enumFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumanalysis_results_result_type_enumFilter, {
    nullable: true
  })
  _max?: NestedEnumanalysis_results_result_type_enumFilter | undefined;
}
