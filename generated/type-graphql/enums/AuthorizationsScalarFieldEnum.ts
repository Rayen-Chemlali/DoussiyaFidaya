import * as TypeGraphQL from "type-graphql";

export enum AuthorizationsScalarFieldEnum {
  id = "id",
  level = "level",
  institut_medical_id = "institut_medical_id",
  patient_id = "patient_id"
}
TypeGraphQL.registerEnumType(AuthorizationsScalarFieldEnum, {
  name: "AuthorizationsScalarFieldEnum",
  description: undefined,
});
