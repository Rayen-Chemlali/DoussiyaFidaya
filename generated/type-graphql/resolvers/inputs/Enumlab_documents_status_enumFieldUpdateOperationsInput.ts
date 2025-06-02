import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { lab_documents_status_enum } from "../../enums/lab_documents_status_enum";

@TypeGraphQL.InputType("Enumlab_documents_status_enumFieldUpdateOperationsInput", {})
export class Enumlab_documents_status_enumFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => lab_documents_status_enum, {
    nullable: true
  })
  set?: "pending" | "in_progress" | "completed" | "cancelled" | undefined;
}
