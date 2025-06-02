import * as TypeGraphQL from "type-graphql";

export enum hopitaux_type_enum {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE"
}
TypeGraphQL.registerEnumType(hopitaux_type_enum, {
  name: "hopitaux_type_enum",
  description: undefined,
});
