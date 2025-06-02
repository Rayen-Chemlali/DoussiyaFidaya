import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Analysis_resultsCountAggregate } from "../outputs/Analysis_resultsCountAggregate";
import { Analysis_resultsMaxAggregate } from "../outputs/Analysis_resultsMaxAggregate";
import { Analysis_resultsMinAggregate } from "../outputs/Analysis_resultsMinAggregate";
import { analysis_results_result_type_enum } from "../../enums/analysis_results_result_type_enum";

@TypeGraphQL.ObjectType("Analysis_resultsGroupBy", {})
export class Analysis_resultsGroupBy {
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

  @TypeGraphQL.Field(_type => Analysis_resultsCountAggregate, {
    nullable: true
  })
  _count!: Analysis_resultsCountAggregate | null;

  @TypeGraphQL.Field(_type => Analysis_resultsMinAggregate, {
    nullable: true
  })
  _min!: Analysis_resultsMinAggregate | null;

  @TypeGraphQL.Field(_type => Analysis_resultsMaxAggregate, {
    nullable: true
  })
  _max!: Analysis_resultsMaxAggregate | null;
}
