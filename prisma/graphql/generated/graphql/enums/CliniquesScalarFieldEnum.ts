import * as TypeGraphQL from "type-graphql";

export enum CliniquesScalarFieldEnum {
  id = "id",
  type = "type",
  name = "name",
  address = "address",
  phone = "phone",
  email = "email"
}
TypeGraphQL.registerEnumType(CliniquesScalarFieldEnum, {
  name: "CliniquesScalarFieldEnum",
  description: undefined,
});
