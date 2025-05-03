import * as TypeGraphQL from "type-graphql";

export enum lab_documents_status_enum {
  pending = "pending",
  in_progress = "in_progress",
  completed = "completed",
  cancelled = "cancelled"
}
TypeGraphQL.registerEnumType(lab_documents_status_enum, {
  name: "lab_documents_status_enum",
  description: undefined,
});
