import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_resultsOrderByWithAggregationInput } from "../../../inputs/Lab_resultsOrderByWithAggregationInput";
import { Lab_resultsScalarWhereWithAggregatesInput } from "../../../inputs/Lab_resultsScalarWhereWithAggregatesInput";
import { Lab_resultsWhereInput } from "../../../inputs/Lab_resultsWhereInput";
import { Lab_resultsScalarFieldEnum } from "../../../../enums/Lab_resultsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLab_resultsArgs {
  @TypeGraphQL.Field(_type => Lab_resultsWhereInput, {
    nullable: true
  })
  where?: Lab_resultsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Lab_resultsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Lab_resultsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_resultsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "is_abnormal" | "description" | "title" | "result_type" | "lab_document_id">;

  @TypeGraphQL.Field(_type => Lab_resultsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Lab_resultsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
