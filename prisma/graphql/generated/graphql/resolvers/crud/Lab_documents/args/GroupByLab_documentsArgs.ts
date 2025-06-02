import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_documentsOrderByWithAggregationInput } from "../../../inputs/Lab_documentsOrderByWithAggregationInput";
import { Lab_documentsScalarWhereWithAggregatesInput } from "../../../inputs/Lab_documentsScalarWhereWithAggregatesInput";
import { Lab_documentsWhereInput } from "../../../inputs/Lab_documentsWhereInput";
import { Lab_documentsScalarFieldEnum } from "../../../../enums/Lab_documentsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLab_documentsArgs {
  @TypeGraphQL.Field(_type => Lab_documentsWhereInput, {
    nullable: true
  })
  where?: Lab_documentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Lab_documentsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "completed_at" | "created_at" | "notes" | "requested_at" | "status" | "section" | "patient_id" | "laboratory_id" | "lab_request_id">;

  @TypeGraphQL.Field(_type => Lab_documentsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Lab_documentsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
