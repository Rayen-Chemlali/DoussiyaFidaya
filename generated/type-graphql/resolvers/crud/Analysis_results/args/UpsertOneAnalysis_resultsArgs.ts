import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Analysis_resultsCreateInput } from "../../../inputs/Analysis_resultsCreateInput";
import { Analysis_resultsUpdateInput } from "../../../inputs/Analysis_resultsUpdateInput";
import { Analysis_resultsWhereUniqueInput } from "../../../inputs/Analysis_resultsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAnalysis_resultsArgs {
  @TypeGraphQL.Field(_type => Analysis_resultsWhereUniqueInput, {
    nullable: false
  })
  where!: Analysis_resultsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Analysis_resultsCreateInput, {
    nullable: false
  })
  create!: Analysis_resultsCreateInput;

  @TypeGraphQL.Field(_type => Analysis_resultsUpdateInput, {
    nullable: false
  })
  update!: Analysis_resultsUpdateInput;
}
