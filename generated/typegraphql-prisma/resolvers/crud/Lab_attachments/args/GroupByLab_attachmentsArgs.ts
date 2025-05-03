import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_attachmentsOrderByWithAggregationInput } from "../../../inputs/Lab_attachmentsOrderByWithAggregationInput";
import { Lab_attachmentsScalarWhereWithAggregatesInput } from "../../../inputs/Lab_attachmentsScalarWhereWithAggregatesInput";
import { Lab_attachmentsWhereInput } from "../../../inputs/Lab_attachmentsWhereInput";
import { Lab_attachmentsScalarFieldEnum } from "../../../../enums/Lab_attachmentsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLab_attachmentsArgs {
  @TypeGraphQL.Field(_type => Lab_attachmentsWhereInput, {
    nullable: true
  })
  where?: Lab_attachmentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Lab_attachmentsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Lab_attachmentsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_attachmentsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "type" | "url" | "lab_document_id">;

  @TypeGraphQL.Field(_type => Lab_attachmentsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Lab_attachmentsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
