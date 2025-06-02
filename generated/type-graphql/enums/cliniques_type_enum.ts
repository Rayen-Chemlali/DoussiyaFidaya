import * as TypeGraphQL from "type-graphql";

export enum cliniques_type_enum {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC"
}
TypeGraphQL.registerEnumType(cliniques_type_enum, {
  name: "cliniques_type_enum",
  description: undefined,
});
