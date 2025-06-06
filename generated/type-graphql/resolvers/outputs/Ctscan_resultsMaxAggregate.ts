import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ctscan_results_result_type_enum } from "../../enums/ctscan_results_result_type_enum";

@TypeGraphQL.ObjectType("Ctscan_resultsMaxAggregate", {})
export class Ctscan_resultsMaxAggregate {
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

  @TypeGraphQL.Field(_type => ctscan_results_result_type_enum, {
    nullable: true
  })
  result_type!: "analysis" | "xray" | "ctscan" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lab_document_id!: string | null;
}
