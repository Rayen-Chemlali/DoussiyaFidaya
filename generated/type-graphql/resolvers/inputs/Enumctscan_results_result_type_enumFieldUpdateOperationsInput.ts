import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ctscan_results_result_type_enum } from "../../enums/ctscan_results_result_type_enum";

@TypeGraphQL.InputType("Enumctscan_results_result_type_enumFieldUpdateOperationsInput", {})
export class Enumctscan_results_result_type_enumFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ctscan_results_result_type_enum, {
    nullable: true
  })
  set?: "analysis" | "xray" | "ctscan" | undefined;
}
