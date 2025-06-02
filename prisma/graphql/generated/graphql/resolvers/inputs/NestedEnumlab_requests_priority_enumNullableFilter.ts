import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { lab_requests_priority_enum } from "../../enums/lab_requests_priority_enum";

@TypeGraphQL.InputType("NestedEnumlab_requests_priority_enumNullableFilter", {})
export class NestedEnumlab_requests_priority_enumNullableFilter {
  @TypeGraphQL.Field(_type => lab_requests_priority_enum, {
    nullable: true
  })
  equals?: "LOW" | "MEDIUM" | "HIGH" | "URGENT" | undefined;

  @TypeGraphQL.Field(_type => [lab_requests_priority_enum], {
    nullable: true
  })
  in?: Array<"LOW" | "MEDIUM" | "HIGH" | "URGENT"> | undefined;

  @TypeGraphQL.Field(_type => [lab_requests_priority_enum], {
    nullable: true
  })
  notIn?: Array<"LOW" | "MEDIUM" | "HIGH" | "URGENT"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumlab_requests_priority_enumNullableFilter, {
    nullable: true
  })
  not?: NestedEnumlab_requests_priority_enumNullableFilter | undefined;
}
