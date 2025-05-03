import * as TypeGraphQL from "type-graphql";

export enum lab_requests_priority_enum {
  low = "low",
  medium = "medium",
  high = "high"
}
TypeGraphQL.registerEnumType(lab_requests_priority_enum, {
  name: "lab_requests_priority_enum",
  description: undefined,
});
