import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { analysis_results_result_type_enum } from "../../enums/analysis_results_result_type_enum";

@TypeGraphQL.InputType("Enumanalysis_results_result_type_enumFieldUpdateOperationsInput", {})
export class Enumanalysis_results_result_type_enumFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => analysis_results_result_type_enum, {
    nullable: true
  })
  set?: "NORMAL" | "ABNORMAL" | "CRITICAL" | undefined;
}
