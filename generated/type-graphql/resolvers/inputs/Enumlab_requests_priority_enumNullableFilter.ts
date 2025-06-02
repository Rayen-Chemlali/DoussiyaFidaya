import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumlab_requests_priority_enumNullableFilter } from "../inputs/NestedEnumlab_requests_priority_enumNullableFilter";
import { lab_requests_priority_enum } from "../../enums/lab_requests_priority_enum";

@TypeGraphQL.InputType("Enumlab_requests_priority_enumNullableFilter", {})
export class Enumlab_requests_priority_enumNullableFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumlab_requests_priority_enumNullableFilter, {
    nullable: true
  })
  not?: NestedEnumlab_requests_priority_enumNullableFilter | undefined;
}
