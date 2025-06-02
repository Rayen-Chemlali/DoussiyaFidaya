import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumlab_requests_priority_enumNullableFilter } from "../inputs/NestedEnumlab_requests_priority_enumNullableFilter";
import { NestedEnumlab_requests_priority_enumNullableWithAggregatesFilter } from "../inputs/NestedEnumlab_requests_priority_enumNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { lab_requests_priority_enum } from "../../enums/lab_requests_priority_enum";

@TypeGraphQL.InputType("Enumlab_requests_priority_enumNullableWithAggregatesFilter", {})
export class Enumlab_requests_priority_enumNullableWithAggregatesFilter {
  @TypeGraphQL.Field(_type => lab_requests_priority_enum, {
    nullable: true
  })
  equals?: "low" | "medium" | "high" | undefined;

  @TypeGraphQL.Field(_type => [lab_requests_priority_enum], {
    nullable: true
  })
  in?: Array<"low" | "medium" | "high"> | undefined;

  @TypeGraphQL.Field(_type => [lab_requests_priority_enum], {
    nullable: true
  })
  notIn?: Array<"low" | "medium" | "high"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumlab_requests_priority_enumNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumlab_requests_priority_enumNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumlab_requests_priority_enumNullableFilter, {
    nullable: true
  })
  _min?: NestedEnumlab_requests_priority_enumNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumlab_requests_priority_enumNullableFilter, {
    nullable: true
  })
  _max?: NestedEnumlab_requests_priority_enumNullableFilter | undefined;
}
