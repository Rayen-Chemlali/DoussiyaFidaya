import * as TypeGraphQL from "type-graphql";

export enum PatientsScalarFieldEnum {
  id = "id",
  cin = "cin",
  date_of_birth = "date_of_birth",
  gender = "gender",
  profile_image = "profile_image",
  general_medical_record_id = "general_medical_record_id",
  user_id = "user_id"
}
TypeGraphQL.registerEnumType(PatientsScalarFieldEnum, {
  name: "PatientsScalarFieldEnum",
  description: undefined,
});
