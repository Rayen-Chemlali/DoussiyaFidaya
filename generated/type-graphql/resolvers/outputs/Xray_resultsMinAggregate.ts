import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { xray_results_result_type_enum } from "../../enums/xray_results_result_type_enum";

@TypeGraphQL.ObjectType("Xray_resultsMinAggregate", {})
export class Xray_resultsMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  is_abnormal!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => xray_results_result_type_enum, {
    nullable: true
  })
  result_type!: "analysis" | "xray" | "ctscan" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lab_document_id!: string | null;
}
