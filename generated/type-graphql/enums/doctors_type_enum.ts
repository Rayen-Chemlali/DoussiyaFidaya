import * as TypeGraphQL from "type-graphql";

export enum doctors_type_enum {
  doctor = "doctor",
  clinique = "clinique",
  hopital = "hopital"
}
TypeGraphQL.registerEnumType(doctors_type_enum, {
  name: "doctors_type_enum",
  description: undefined,
});
