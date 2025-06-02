import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { xray_results_result_type_enum } from "../../enums/xray_results_result_type_enum";

@TypeGraphQL.InputType("Xray_resultsCreateManyInput", {})
export class Xray_resultsCreateManyInput {
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
  result_type!: "NORMAL" | "ABNORMAL" | "CRITICAL";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lab_document_id!: string;
}
