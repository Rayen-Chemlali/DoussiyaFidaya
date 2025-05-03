import * as TypeGraphQL from "type-graphql";

export enum Analysis_resultsScalarFieldEnum {
  id = "id",
  is_abnormal = "is_abnormal",
  description = "description",
  title = "title",
  result_type = "result_type",
  reference_range = "reference_range",
  unit = "unit",
  value = "value",
  lab_document_id = "lab_document_id"
}
TypeGraphQL.registerEnumType(Analysis_resultsScalarFieldEnum, {
  name: "Analysis_resultsScalarFieldEnum",
  description: undefined,
});
