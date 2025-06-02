import * as TypeGraphQL from "type-graphql";

export enum instituts_medicaux_type_enum {
  doctor = "doctor",
  clinique = "clinique",
  hopital = "hopital"
}
TypeGraphQL.registerEnumType(instituts_medicaux_type_enum, {
  name: "instituts_medicaux_type_enum",
  description: undefined,
});
