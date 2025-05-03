import * as TypeGraphQL from "type-graphql";

export enum Rdv_requestsScalarFieldEnum {
  id = "id",
  date = "date",
  time = "time",
  Motif = "Motif",
  Status = "Status",
  patient_id = "patient_id",
  doctor_id = "doctor_id",
  rdv_id = "rdv_id"
}
TypeGraphQL.registerEnumType(Rdv_requestsScalarFieldEnum, {
  name: "Rdv_requestsScalarFieldEnum",
  description: undefined,
});
