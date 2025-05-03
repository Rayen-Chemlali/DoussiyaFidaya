import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_documentsOrderByWithRelationInput } from "../../../inputs/Lab_documentsOrderByWithRelationInput";
import { Lab_documentsWhereInput } from "../../../inputs/Lab_documentsWhereInput";
import { Lab_documentsWhereUniqueInput } from "../../../inputs/Lab_documentsWhereUniqueInput";
import { Lab_documentsScalarFieldEnum } from "../../../../enums/Lab_documentsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstLab_documentsArgs {
  @TypeGraphQL.Field(_type => Lab_documentsWhereInput, {
    nullable: true
  })
  where?: Lab_documentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Lab_documentsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Lab_documentsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "completed_at" | "created_at" | "notes" | "requested_at" | "status" | "section" | "patient_id" | "laboratory_id" | "lab_request_id"> | undefined;
}
