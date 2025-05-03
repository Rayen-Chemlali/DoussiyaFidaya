import * as TypeGraphQL from "type-graphql";

export enum users_role_enum {
  Patient = "Patient",
  Doctor = "Doctor",
  Pharmacy = "Pharmacy",
  Laboratory = "Laboratory",
  Insurance = "Insurance",
  Assistant = "Assistant",
  Admin = "Admin"
}
TypeGraphQL.registerEnumType(users_role_enum, {
  name: "users_role_enum",
  description: undefined,
});
