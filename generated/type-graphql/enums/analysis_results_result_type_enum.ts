import * as TypeGraphQL from "type-graphql";

export enum analysis_results_result_type_enum {
  analysis = "analysis",
  xray = "xray",
  ctscan = "ctscan"
}
TypeGraphQL.registerEnumType(analysis_results_result_type_enum, {
  name: "analysis_results_result_type_enum",
  description: undefined,
});
