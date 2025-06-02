import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateNestedOneWithoutXray_resultsInput } from "../inputs/Lab_documentsCreateNestedOneWithoutXray_resultsInput";
import { xray_results_result_type_enum } from "../../enums/xray_results_result_type_enum";

@TypeGraphQL.InputType("Xray_resultsCreateInput", {})
export class Xray_resultsCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_abnormal!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => xray_results_result_type_enum, {
    nullable: false
  })
  result_type!: "analysis" | "xray" | "ctscan";

  @TypeGraphQL.Field(_type => Lab_documentsCreateNestedOneWithoutXray_resultsInput, {
    nullable: false
  })
  lab_documents!: Lab_documentsCreateNestedOneWithoutXray_resultsInput;
}
