import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumlab_results_result_type_enumFilter } from "../inputs/NestedEnumlab_results_result_type_enumFilter";
import { NestedEnumlab_results_result_type_enumWithAggregatesFilter } from "../inputs/NestedEnumlab_results_result_type_enumWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { lab_results_result_type_enum } from "../../enums/lab_results_result_type_enum";

@TypeGraphQL.InputType("Enumlab_results_result_type_enumWithAggregatesFilter", {})
export class Enumlab_results_result_type_enumWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumlab_results_result_type_enumWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumlab_results_result_type_enumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumlab_results_result_type_enumFilter, {
    nullable: true
  })
  _min?: NestedEnumlab_results_result_type_enumFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumlab_results_result_type_enumFilter, {
    nullable: true
  })
  _max?: NestedEnumlab_results_result_type_enumFilter | undefined;
}
