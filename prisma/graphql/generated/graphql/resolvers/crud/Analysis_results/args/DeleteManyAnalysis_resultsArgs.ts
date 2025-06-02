import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Analysis_resultsWhereInput } from "../../../inputs/Analysis_resultsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAnalysis_resultsArgs {
  @TypeGraphQL.Field(_type => Analysis_resultsWhereInput, {
    nullable: true
  })
  where?: Analysis_resultsWhereInput | undefined;
}
