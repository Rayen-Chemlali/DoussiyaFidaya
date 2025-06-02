import * as TypeGraphQL from "type-graphql";

export enum authorizations_level_enum {
  general = "general",
  speciality = "speciality",
  full_access = "full_access"
}
TypeGraphQL.registerEnumType(authorizations_level_enum, {
  name: "authorizations_level_enum",
  description: undefined,
});
