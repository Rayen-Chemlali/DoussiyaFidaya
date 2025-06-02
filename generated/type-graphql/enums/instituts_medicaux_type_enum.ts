import * as TypeGraphQL from "type-graphql";

export enum instituts_medicaux_type_enum {
  CLINIC = "CLINIC",
  HOSPITAL = "HOSPITAL",
  LABORATORY = "LABORATORY"
}
TypeGraphQL.registerEnumType(instituts_medicaux_type_enum, {
  name: "instituts_medicaux_type_enum",
  description: undefined,
});
