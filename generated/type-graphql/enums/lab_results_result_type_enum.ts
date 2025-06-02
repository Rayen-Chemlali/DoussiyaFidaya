import * as TypeGraphQL from "type-graphql";

export enum lab_results_result_type_enum {
  analysis = "analysis",
  xray = "xray",
  ctscan = "ctscan"
}
TypeGraphQL.registerEnumType(lab_results_result_type_enum, {
  name: "lab_results_result_type_enum",
  description: undefined,
});
