import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Analysis_resultsOrderByWithAggregationInput } from "../../../inputs/Analysis_resultsOrderByWithAggregationInput";
import { Analysis_resultsScalarWhereWithAggregatesInput } from "../../../inputs/Analysis_resultsScalarWhereWithAggregatesInput";
import { Analysis_resultsWhereInput } from "../../../inputs/Analysis_resultsWhereInput";
import { Analysis_resultsScalarFieldEnum } from "../../../../enums/Analysis_resultsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAnalysis_resultsArgs {
  @TypeGraphQL.Field(_type => Analysis_resultsWhereInput, {
    nullable: true
  })
  where?: Analysis_resultsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Analysis_resultsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Analysis_resultsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Analysis_resultsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "is_abnormal" | "description" | "title" | "result_type" | "reference_range" | "unit" | "value" | "lab_document_id">;

  @TypeGraphQL.Field(_type => Analysis_resultsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Analysis_resultsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
