import * as TypeGraphQL from "type-graphql";

export enum patients_gender_enum {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER"
}
TypeGraphQL.registerEnumType(patients_gender_enum, {
  name: "patients_gender_enum",
  description: undefined,
});
