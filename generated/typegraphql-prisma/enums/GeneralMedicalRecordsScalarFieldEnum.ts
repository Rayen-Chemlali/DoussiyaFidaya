import * as TypeGraphQL from "type-graphql";

export enum GeneralMedicalRecordsScalarFieldEnum {
  id = "id",
  allergies = "allergies",
  bloodType = "bloodType",
  birthDate = "birthDate",
  height = "height",
  weight = "weight",
  patient_id = "patient_id"
}
TypeGraphQL.registerEnumType(GeneralMedicalRecordsScalarFieldEnum, {
  name: "GeneralMedicalRecordsScalarFieldEnum",
  description: undefined,
});
