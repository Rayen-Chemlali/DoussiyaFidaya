import * as TypeGraphQL from "type-graphql";

export enum UsersScalarFieldEnum {
  id = "id",
  address = "address",
  created_at = "created_at",
  email = "email",
  first_name = "first_name",
  last_name = "last_name",
  is_verified = "is_verified",
  last_login = "last_login",
  phone = "phone",
  profile_picture = "profile_picture",
  role = "role",
  associated_id = "associated_id",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(UsersScalarFieldEnum, {
  name: "UsersScalarFieldEnum",
  description: undefined,
});
