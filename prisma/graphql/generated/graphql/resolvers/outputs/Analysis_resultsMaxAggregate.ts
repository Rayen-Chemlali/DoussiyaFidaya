import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { analysis_results_result_type_enum } from "../../enums/analysis_results_result_type_enum";

@TypeGraphQL.ObjectType("Analysis_resultsMaxAggregate", {})
export class Analysis_resultsMaxAggregate {
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

  @TypeGraphQL.Field(_type => analysis_results_result_type_enum, {
    nullable: true
  })
  result_type!: "NORMAL" | "ABNORMAL" | "CRITICAL" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reference_range!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  unit!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  value!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lab_document_id!: string | null;
}
