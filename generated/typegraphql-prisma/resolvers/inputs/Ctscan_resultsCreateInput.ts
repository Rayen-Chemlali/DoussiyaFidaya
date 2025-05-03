import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateNestedOneWithoutCtscan_resultsInput } from "../inputs/Lab_documentsCreateNestedOneWithoutCtscan_resultsInput";
import { ctscan_results_result_type_enum } from "../../enums/ctscan_results_result_type_enum";

@TypeGraphQL.InputType("Ctscan_resultsCreateInput", {})
export class Ctscan_resultsCreateInput {
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

  @TypeGraphQL.Field(_type => ctscan_results_result_type_enum, {
    nullable: false
  })
  result_type!: "analysis" | "xray" | "ctscan";

  @TypeGraphQL.Field(_type => Lab_documentsCreateNestedOneWithoutCtscan_resultsInput, {
    nullable: false
  })
  lab_documents!: Lab_documentsCreateNestedOneWithoutCtscan_resultsInput;
}
