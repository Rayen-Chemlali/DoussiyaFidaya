import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Ctscan_resultsOrderByWithRelationInput } from "../../../inputs/Ctscan_resultsOrderByWithRelationInput";
import { Ctscan_resultsWhereInput } from "../../../inputs/Ctscan_resultsWhereInput";
import { Ctscan_resultsWhereUniqueInput } from "../../../inputs/Ctscan_resultsWhereUniqueInput";
import { Ctscan_resultsScalarFieldEnum } from "../../../../enums/Ctscan_resultsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCtscan_resultsOrThrowArgs {
  @TypeGraphQL.Field(_type => Ctscan_resultsWhereInput, {
    nullable: true
  })
  where?: Ctscan_resultsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Ctscan_resultsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Ctscan_resultsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Ctscan_resultsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Ctscan_resultsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Ctscan_resultsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "is_abnormal" | "description" | "title" | "result_type" | "lab_document_id"> | undefined;
}
