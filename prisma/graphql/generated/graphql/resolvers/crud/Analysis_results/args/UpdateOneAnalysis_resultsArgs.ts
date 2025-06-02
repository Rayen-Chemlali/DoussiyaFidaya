import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Analysis_resultsUpdateInput } from "../../../inputs/Analysis_resultsUpdateInput";
import { Analysis_resultsWhereUniqueInput } from "../../../inputs/Analysis_resultsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAnalysis_resultsArgs {
  @TypeGraphQL.Field(_type => Analysis_resultsUpdateInput, {
    nullable: false
  })
  data!: Analysis_resultsUpdateInput;

  @TypeGraphQL.Field(_type => Analysis_resultsWhereUniqueInput, {
    nullable: false
  })
  where!: Analysis_resultsWhereUniqueInput;
}
