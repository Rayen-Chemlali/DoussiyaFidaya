import * as TypeGraphQL from "type-graphql";

export enum users_role_enum {
  ADMIN = "ADMIN",
  DOCTOR = "DOCTOR",
  PATIENT = "PATIENT",
  LABORATORY = "LABORATORY",
  HOSPITAL = "HOSPITAL",
  CLINIC = "CLINIC"
}
TypeGraphQL.registerEnumType(users_role_enum, {
  name: "users_role_enum",
  description: undefined,
});
