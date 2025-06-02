import * as TypeGraphQL from "type-graphql";

export enum ConsultationsScalarFieldEnum {
  id = "id",
  section = "section",
  date = "date",
  notes = "notes",
  measures = "measures",
  doctor_id = "doctor_id",
  institut_medical_id = "institut_medical_id",
  prescription_id = "prescription_id",
  patient_id = "patient_id"
}
TypeGraphQL.registerEnumType(ConsultationsScalarFieldEnum, {
  name: "ConsultationsScalarFieldEnum",
  description: undefined,
});
