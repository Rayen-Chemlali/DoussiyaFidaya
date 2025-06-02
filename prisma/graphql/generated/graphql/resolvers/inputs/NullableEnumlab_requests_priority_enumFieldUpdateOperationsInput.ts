import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { lab_requests_priority_enum } from "../../enums/lab_requests_priority_enum";

@TypeGraphQL.InputType("NullableEnumlab_requests_priority_enumFieldUpdateOperationsInput", {})
export class NullableEnumlab_requests_priority_enumFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => lab_requests_priority_enum, {
    nullable: true
  })
  set?: "LOW" | "MEDIUM" | "HIGH" | "URGENT" | undefined;
}
