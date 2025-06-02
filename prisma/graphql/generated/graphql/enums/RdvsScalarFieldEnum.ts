import * as TypeGraphQL from "type-graphql";

export enum RdvsScalarFieldEnum {
  id = "id",
  date = "date",
  time = "time",
  patient_id = "patient_id",
  doctor_id = "doctor_id",
  consultation_id = "consultation_id",
  rdv_request_id = "rdv_request_id"
}
TypeGraphQL.registerEnumType(RdvsScalarFieldEnum, {
  name: "RdvsScalarFieldEnum",
  description: undefined,
});
