import * as TypeGraphQL from "type-graphql";

export enum DoctorsScalarFieldEnum {
  id = "id",
  type = "type",
  is_license_verified = "is_license_verified",
  bio = "bio",
  education = "education",
  experience = "experience",
  first_name = "first_name",
  languages = "languages",
  last_name = "last_name",
  profile_image = "profile_image",
  specialty = "specialty",
  user_id = "user_id"
}
TypeGraphQL.registerEnumType(DoctorsScalarFieldEnum, {
  name: "DoctorsScalarFieldEnum",
  description: undefined,
});
