import * as TypeGraphQL from "type-graphql";

export enum lab_documents_status_enum {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED"
}
TypeGraphQL.registerEnumType(lab_documents_status_enum, {
  name: "lab_documents_status_enum",
  description: undefined,
});
