import * as TypeGraphQL from "type-graphql";

export enum prescriptions_status_enum {
  Pending = "Pending",
  Approved = "Approved",
  Rejected = "Rejected"
}
TypeGraphQL.registerEnumType(prescriptions_status_enum, {
  name: "prescriptions_status_enum",
  description: undefined,
});
