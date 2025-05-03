import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Ctscan_resultsOrderByWithAggregationInput } from "../../../inputs/Ctscan_resultsOrderByWithAggregationInput";
import { Ctscan_resultsScalarWhereWithAggregatesInput } from "../../../inputs/Ctscan_resultsScalarWhereWithAggregatesInput";
import { Ctscan_resultsWhereInput } from "../../../inputs/Ctscan_resultsWhereInput";
import { Ctscan_resultsScalarFieldEnum } from "../../../../enums/Ctscan_resultsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCtscan_resultsArgs {
  @TypeGraphQL.Field(_type => Ctscan_resultsWhereInput, {
    nullable: true
  })
  where?: Ctscan_resultsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Ctscan_resultsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Ctscan_resultsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Ctscan_resultsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "is_abnormal" | "description" | "title" | "result_type" | "lab_document_id">;

  @TypeGraphQL.Field(_type => Ctscan_resultsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Ctscan_resultsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
