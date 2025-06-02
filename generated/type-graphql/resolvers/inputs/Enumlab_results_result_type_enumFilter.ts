import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumlab_results_result_type_enumFilter } from "../inputs/NestedEnumlab_results_result_type_enumFilter";
import { lab_results_result_type_enum } from "../../enums/lab_results_result_type_enum";

@TypeGraphQL.InputType("Enumlab_results_result_type_enumFilter", {})
export class Enumlab_results_result_type_enumFilter {
  @TypeGraphQL.Field(_type => lab_results_result_type_enum, {
    nullable: true
  })
  equals?: "analysis" | "xray" | "ctscan" | undefined;

  @TypeGraphQL.Field(_type => [lab_results_result_type_enum], {
    nullable: true
  })
  in?: Array<"analysis" | "xray" | "ctscan"> | undefined;

  @TypeGraphQL.Field(_type => [lab_results_result_type_enum], {
    nullable: true
  })
  notIn?: Array<"analysis" | "xray" | "ctscan"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumlab_results_result_type_enumFilter, {
    nullable: true
  })
  not?: NestedEnumlab_results_result_type_enumFilter | undefined;
}
