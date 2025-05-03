import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumlab_documents_status_enumFilter } from "../inputs/NestedEnumlab_documents_status_enumFilter";
import { lab_documents_status_enum } from "../../enums/lab_documents_status_enum";

@TypeGraphQL.InputType("Enumlab_documents_status_enumFilter", {})
export class Enumlab_documents_status_enumFilter {
  @TypeGraphQL.Field(_type => lab_documents_status_enum, {
    nullable: true
  })
  equals?: "pending" | "in_progress" | "completed" | "cancelled" | undefined;

  @TypeGraphQL.Field(_type => [lab_documents_status_enum], {
    nullable: true
  })
  in?: Array<"pending" | "in_progress" | "completed" | "cancelled"> | undefined;

  @TypeGraphQL.Field(_type => [lab_documents_status_enum], {
    nullable: true
  })
  notIn?: Array<"pending" | "in_progress" | "completed" | "cancelled"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumlab_documents_status_enumFilter, {
    nullable: true
  })
  not?: NestedEnumlab_documents_status_enumFilter | undefined;
}
