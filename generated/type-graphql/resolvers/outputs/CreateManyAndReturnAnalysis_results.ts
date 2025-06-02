import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documents } from "../../models/Lab_documents";
import { analysis_results_result_type_enum } from "../../enums/analysis_results_result_type_enum";

@TypeGraphQL.ObjectType("CreateManyAndReturnAnalysis_results", {})
export class CreateManyAndReturnAnalysis_results {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_abnormal!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => analysis_results_result_type_enum, {
    nullable: false
  })
  result_type!: "NORMAL" | "ABNORMAL" | "CRITICAL";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  reference_range!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  unit!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  value!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lab_document_id!: string;

  @TypeGraphQL.Field(_type => Lab_documents, {
    nullable: false
  })
  lab_documents!: Lab_documents;
}
