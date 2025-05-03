import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Analysis_resultsCreateManyInput } from "../../../inputs/Analysis_resultsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnAnalysis_resultsArgs {
  @TypeGraphQL.Field(_type => [Analysis_resultsCreateManyInput], {
    nullable: false
  })
  data!: Analysis_resultsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
