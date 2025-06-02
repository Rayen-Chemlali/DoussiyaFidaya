import * as TypeGraphQL from "type-graphql";

export enum HopitauxScalarFieldEnum {
  id = "id",
  type = "type",
  name = "name",
  address = "address",
  phone = "phone",
  email = "email"
}
TypeGraphQL.registerEnumType(HopitauxScalarFieldEnum, {
  name: "HopitauxScalarFieldEnum",
  description: undefined,
});
