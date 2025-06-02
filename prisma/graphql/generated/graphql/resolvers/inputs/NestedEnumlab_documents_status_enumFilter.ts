import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { lab_documents_status_enum } from "../../enums/lab_documents_status_enum";

@TypeGraphQL.InputType("NestedEnumlab_documents_status_enumFilter", {})
export class NestedEnumlab_documents_status_enumFilter {
  @TypeGraphQL.Field(_type => lab_documents_status_enum, {
    nullable: true
  })
  equals?: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED" | undefined;

  @TypeGraphQL.Field(_type => [lab_documents_status_enum], {
    nullable: true
  })
  in?: Array<"PENDING" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED"> | undefined;

  @TypeGraphQL.Field(_type => [lab_documents_status_enum], {
    nullable: true
  })
  notIn?: Array<"PENDING" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumlab_documents_status_enumFilter, {
    nullable: true
  })
  not?: NestedEnumlab_documents_status_enumFilter | undefined;
}
