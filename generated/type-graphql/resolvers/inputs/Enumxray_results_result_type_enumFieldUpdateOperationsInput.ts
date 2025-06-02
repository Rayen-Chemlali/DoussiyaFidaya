import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { xray_results_result_type_enum } from "../../enums/xray_results_result_type_enum";

@TypeGraphQL.InputType("Enumxray_results_result_type_enumFieldUpdateOperationsInput", {})
export class Enumxray_results_result_type_enumFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => xray_results_result_type_enum, {
    nullable: true
  })
  set?: "NORMAL" | "ABNORMAL" | "CRITICAL" | undefined;
}
