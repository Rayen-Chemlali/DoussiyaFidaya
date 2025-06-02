import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Xray_resultsOrderByWithAggregationInput } from "../../../inputs/Xray_resultsOrderByWithAggregationInput";
import { Xray_resultsScalarWhereWithAggregatesInput } from "../../../inputs/Xray_resultsScalarWhereWithAggregatesInput";
import { Xray_resultsWhereInput } from "../../../inputs/Xray_resultsWhereInput";
import { Xray_resultsScalarFieldEnum } from "../../../../enums/Xray_resultsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByXray_resultsArgs {
  @TypeGraphQL.Field(_type => Xray_resultsWhereInput, {
    nullable: true
  })
  where?: Xray_resultsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Xray_resultsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Xray_resultsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Xray_resultsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "is_abnormal" | "description" | "title" | "result_type" | "lab_document_id">;

  @TypeGraphQL.Field(_type => Xray_resultsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Xray_resultsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
