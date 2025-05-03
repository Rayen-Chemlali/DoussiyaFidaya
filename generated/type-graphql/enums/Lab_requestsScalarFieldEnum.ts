import * as TypeGraphQL from "type-graphql";

export enum Lab_requestsScalarFieldEnum {
  id = "id",
  type = "type",
  priority = "priority",
  description = "description",
  doctor_id = "doctor_id",
  patient_id = "patient_id"
}
TypeGraphQL.registerEnumType(Lab_requestsScalarFieldEnum, {
  name: "Lab_requestsScalarFieldEnum",
  description: undefined,
});
