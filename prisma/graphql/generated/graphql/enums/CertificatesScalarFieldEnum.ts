import * as TypeGraphQL from "type-graphql";

export enum CertificatesScalarFieldEnum {
  id = "id",
  type = "type",
  start_date = "start_date",
  end_date = "end_date",
  description = "description",
  doctor_id = "doctor_id",
  patient_id = "patient_id"
}
TypeGraphQL.registerEnumType(CertificatesScalarFieldEnum, {
  name: "CertificatesScalarFieldEnum",
  description: undefined,
});
