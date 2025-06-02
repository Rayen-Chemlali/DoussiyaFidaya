import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumanalysis_results_result_type_enumFilter } from "../inputs/NestedEnumanalysis_results_result_type_enumFilter";
import { analysis_results_result_type_enum } from "../../enums/analysis_results_result_type_enum";

@TypeGraphQL.InputType("Enumanalysis_results_result_type_enumFilter", {})
export class Enumanalysis_results_result_type_enumFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumanalysis_results_result_type_enumFilter, {
    nullable: true
  })
  not?: NestedEnumanalysis_results_result_type_enumFilter | undefined;
}
