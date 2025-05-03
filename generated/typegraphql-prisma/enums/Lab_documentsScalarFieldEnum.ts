import * as TypeGraphQL from "type-graphql";

export enum Lab_documentsScalarFieldEnum {
  id = "id",
  completed_at = "completed_at",
  created_at = "created_at",
  notes = "notes",
  requested_at = "requested_at",
  status = "status",
  section = "section",
  patient_id = "patient_id",
  laboratory_id = "laboratory_id",
  lab_request_id = "lab_request_id"
}
TypeGraphQL.registerEnumType(Lab_documentsScalarFieldEnum, {
  name: "Lab_documentsScalarFieldEnum",
  description: undefined,
});
