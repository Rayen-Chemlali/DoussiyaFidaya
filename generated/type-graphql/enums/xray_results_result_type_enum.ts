import * as TypeGraphQL from "type-graphql";

export enum xray_results_result_type_enum {
  NORMAL = "NORMAL",
  ABNORMAL = "ABNORMAL",
  CRITICAL = "CRITICAL"
}
TypeGraphQL.registerEnumType(xray_results_result_type_enum, {
  name: "xray_results_result_type_enum",
  description: undefined,
});
