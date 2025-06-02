import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Ctscan_resultsCreateInput } from "../../../inputs/Ctscan_resultsCreateInput";
import { Ctscan_resultsUpdateInput } from "../../../inputs/Ctscan_resultsUpdateInput";
import { Ctscan_resultsWhereUniqueInput } from "../../../inputs/Ctscan_resultsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCtscan_resultsArgs {
  @TypeGraphQL.Field(_type => Ctscan_resultsWhereUniqueInput, {
    nullable: false
  })
  where!: Ctscan_resultsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Ctscan_resultsCreateInput, {
    nullable: false
  })
  create!: Ctscan_resultsCreateInput;

  @TypeGraphQL.Field(_type => Ctscan_resultsUpdateInput, {
    nullable: false
  })
  update!: Ctscan_resultsUpdateInput;
}
