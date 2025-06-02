import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumlab_results_result_type_enumFilter } from "../inputs/NestedEnumlab_results_result_type_enumFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { lab_results_result_type_enum } from "../../enums/lab_results_result_type_enum";

@TypeGraphQL.InputType("NestedEnumlab_results_result_type_enumWithAggregatesFilter", {})
export class NestedEnumlab_results_result_type_enumWithAggregatesFilter {
  @TypeGraphQL.Field(_type => lab_results_result_type_enum, {
    nullable: true
  })
  equals?: "NORMAL" | "ABNORMAL" | "CRITICAL" | undefined;

  @TypeGraphQL.Field(_type => [lab_results_result_type_enum], {
    nullable: true
  })
  in?: Array<"NORMAL" | "ABNORMAL" | "CRITICAL"> | undefined;

  @TypeGraphQL.Field(_type => [lab_results_result_type_enum], {
    nullable: true
  })
  notIn?: Array<"NORMAL" | "ABNORMAL" | "CRITICAL"> | undefined;

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
