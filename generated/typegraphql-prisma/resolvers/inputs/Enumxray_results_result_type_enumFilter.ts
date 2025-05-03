import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumxray_results_result_type_enumFilter } from "../inputs/NestedEnumxray_results_result_type_enumFilter";
import { xray_results_result_type_enum } from "../../enums/xray_results_result_type_enum";

@TypeGraphQL.InputType("Enumxray_results_result_type_enumFilter", {})
export class Enumxray_results_result_type_enumFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumxray_results_result_type_enumFilter, {
    nullable: true
  })
  not?: NestedEnumxray_results_result_type_enumFilter | undefined;
}
