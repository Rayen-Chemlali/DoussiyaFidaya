import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Analysis_resultsCreateInput } from "../../../inputs/Analysis_resultsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAnalysis_resultsArgs {
  @TypeGraphQL.Field(_type => Analysis_resultsCreateInput, {
    nullable: false
  })
  data!: Analysis_resultsCreateInput;
}
