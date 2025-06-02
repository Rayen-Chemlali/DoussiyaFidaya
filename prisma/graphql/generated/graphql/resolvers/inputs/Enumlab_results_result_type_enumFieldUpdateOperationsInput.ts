import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { lab_results_result_type_enum } from "../../enums/lab_results_result_type_enum";

@TypeGraphQL.InputType("Enumlab_results_result_type_enumFieldUpdateOperationsInput", {})
export class Enumlab_results_result_type_enumFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => lab_results_result_type_enum, {
    nullable: true
  })
  set?: "NORMAL" | "ABNORMAL" | "CRITICAL" | undefined;
}
