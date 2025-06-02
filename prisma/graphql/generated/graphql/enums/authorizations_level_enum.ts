import * as TypeGraphQL from "type-graphql";

export enum authorizations_level_enum {
  READ = "READ",
  WRITE = "WRITE",
  ADMIN = "ADMIN"
}
TypeGraphQL.registerEnumType(authorizations_level_enum, {
  name: "authorizations_level_enum",
  description: undefined,
});
