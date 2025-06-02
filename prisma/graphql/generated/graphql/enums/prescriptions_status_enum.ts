import * as TypeGraphQL from "type-graphql";

export enum prescriptions_status_enum {
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED"
}
TypeGraphQL.registerEnumType(prescriptions_status_enum, {
  name: "prescriptions_status_enum",
  description: undefined,
});
