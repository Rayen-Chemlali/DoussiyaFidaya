import * as TypeGraphQL from "type-graphql";

export enum hopitaux_type_enum {
  doctor = "doctor",
  clinique = "clinique",
  hopital = "hopital"
}
TypeGraphQL.registerEnumType(hopitaux_type_enum, {
  name: "hopitaux_type_enum",
  description: undefined,
});
