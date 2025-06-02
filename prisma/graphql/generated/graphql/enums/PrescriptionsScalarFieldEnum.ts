import * as TypeGraphQL from "type-graphql";

export enum PrescriptionsScalarFieldEnum {
  id = "id",
  date = "date",
  instructions = "instructions",
  is_signed = "is_signed",
  section = "section",
  status = "status",
  updated_at = "updated_at",
  doctor_id = "doctor_id",
  patient_id = "patient_id"
}
TypeGraphQL.registerEnumType(PrescriptionsScalarFieldEnum, {
  name: "PrescriptionsScalarFieldEnum",
  description: undefined,
});
