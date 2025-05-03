import * as TypeGraphQL from "type-graphql";

export enum patients_gender_enum {
  Male = "Male",
  Female = "Female"
}
TypeGraphQL.registerEnumType(patients_gender_enum, {
  name: "patients_gender_enum",
  description: undefined,
});
