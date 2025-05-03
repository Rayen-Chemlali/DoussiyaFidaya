import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Analysis_resultsWhereUniqueInput } from "../../../inputs/Analysis_resultsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAnalysis_resultsArgs {
  @TypeGraphQL.Field(_type => Analysis_resultsWhereUniqueInput, {
    nullable: false
  })
  where!: Analysis_resultsWhereUniqueInput;
}
