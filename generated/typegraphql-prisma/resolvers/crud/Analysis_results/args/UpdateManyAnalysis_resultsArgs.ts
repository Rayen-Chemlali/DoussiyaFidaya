import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Analysis_resultsUpdateManyMutationInput } from "../../../inputs/Analysis_resultsUpdateManyMutationInput";
import { Analysis_resultsWhereInput } from "../../../inputs/Analysis_resultsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAnalysis_resultsArgs {
  @TypeGraphQL.Field(_type => Analysis_resultsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Analysis_resultsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Analysis_resultsWhereInput, {
    nullable: true
  })
  where?: Analysis_resultsWhereInput | undefined;
}
