import * as TypeGraphQL from "type-graphql";

export enum ctscan_results_result_type_enum {
  analysis = "analysis",
  xray = "xray",
  ctscan = "ctscan"
}
TypeGraphQL.registerEnumType(ctscan_results_result_type_enum, {
  name: "ctscan_results_result_type_enum",
  description: undefined,
});
