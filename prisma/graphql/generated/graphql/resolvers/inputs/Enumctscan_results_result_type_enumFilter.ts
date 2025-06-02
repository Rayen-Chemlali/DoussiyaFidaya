import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumctscan_results_result_type_enumFilter } from "../inputs/NestedEnumctscan_results_result_type_enumFilter";
import { ctscan_results_result_type_enum } from "../../enums/ctscan_results_result_type_enum";

@TypeGraphQL.InputType("Enumctscan_results_result_type_enumFilter", {})
export class Enumctscan_results_result_type_enumFilter {
  @TypeGraphQL.Field(_type => ctscan_results_result_type_enum, {
    nullable: true
  })
  equals?: "NORMAL" | "ABNORMAL" | "CRITICAL" | undefined;

  @TypeGraphQL.Field(_type => [ctscan_results_result_type_enum], {
    nullable: true
  })
  in?: Array<"NORMAL" | "ABNORMAL" | "CRITICAL"> | undefined;

  @TypeGraphQL.Field(_type => [ctscan_results_result_type_enum], {
    nullable: true
  })
  notIn?: Array<"NORMAL" | "ABNORMAL" | "CRITICAL"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumctscan_results_result_type_enumFilter, {
    nullable: true
  })
  not?: NestedEnumctscan_results_result_type_enumFilter | undefined;
}
