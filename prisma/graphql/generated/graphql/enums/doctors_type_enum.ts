import * as TypeGraphQL from "type-graphql";

export enum doctors_type_enum {
  GENERAL_PRACTITIONER = "GENERAL_PRACTITIONER",
  SPECIALIST = "SPECIALIST",
  SURGEON = "SURGEON"
}
TypeGraphQL.registerEnumType(doctors_type_enum, {
  name: "doctors_type_enum",
  description: undefined,
});
