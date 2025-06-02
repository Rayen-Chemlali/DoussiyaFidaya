import * as TypeGraphQL from "type-graphql";

export enum lab_requests_priority_enum {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
  URGENT = "URGENT"
}
TypeGraphQL.registerEnumType(lab_requests_priority_enum, {
  name: "lab_requests_priority_enum",
  description: undefined,
});
