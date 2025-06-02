import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { analysis_results_result_type_enum } from "../../enums/analysis_results_result_type_enum";

@TypeGraphQL.InputType("Analysis_resultsCreateWithoutLab_documentsInput", {})
export class Analysis_resultsCreateWithoutLab_documentsInput {
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

  @TypeGraphQL.Field(_type => analysis_results_result_type_enum, {
    nullable: false
  })
  result_type!: "analysis" | "xray" | "ctscan";

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
}
