import * as TypeGraphQL from "type-graphql";

export enum Lab_resultsScalarFieldEnum {
  id = "id",
  is_abnormal = "is_abnormal",
  description = "description",
  title = "title",
  result_type = "result_type",
  lab_document_id = "lab_document_id"
}
TypeGraphQL.registerEnumType(Lab_resultsScalarFieldEnum, {
  name: "Lab_resultsScalarFieldEnum",
  description: undefined,
});
