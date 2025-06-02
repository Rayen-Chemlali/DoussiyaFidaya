import * as TypeGraphQL from "type-graphql";

export enum cliniques_type_enum {
  doctor = "doctor",
  clinique = "clinique",
  hopital = "hopital"
}
TypeGraphQL.registerEnumType(cliniques_type_enum, {
  name: "cliniques_type_enum",
  description: undefined,
});
