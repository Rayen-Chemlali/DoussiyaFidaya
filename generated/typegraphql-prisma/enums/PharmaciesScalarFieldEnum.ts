import * as TypeGraphQL from "type-graphql";

export enum PharmaciesScalarFieldEnum {
  id = "id",
  address = "address",
  phone = "phone",
  email = "email",
  name = "name"
}
TypeGraphQL.registerEnumType(PharmaciesScalarFieldEnum, {
  name: "PharmaciesScalarFieldEnum",
  description: undefined,
});
