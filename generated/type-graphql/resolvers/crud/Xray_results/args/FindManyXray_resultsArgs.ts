import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Xray_resultsOrderByWithRelationInput } from "../../../inputs/Xray_resultsOrderByWithRelationInput";
import { Xray_resultsWhereInput } from "../../../inputs/Xray_resultsWhereInput";
import { Xray_resultsWhereUniqueInput } from "../../../inputs/Xray_resultsWhereUniqueInput";
import { Xray_resultsScalarFieldEnum } from "../../../../enums/Xray_resultsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyXray_resultsArgs {
  @TypeGraphQL.Field(_type => Xray_resultsWhereInput, {
    nullable: true
  })
  where?: Xray_resultsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Xray_resultsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Xray_resultsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Xray_resultsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Xray_resultsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Xray_resultsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "is_abnormal" | "description" | "title" | "result_type" | "lab_document_id"> | undefined;
}
