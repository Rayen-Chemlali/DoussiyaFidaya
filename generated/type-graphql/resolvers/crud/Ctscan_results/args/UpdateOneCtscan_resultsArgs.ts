import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Ctscan_resultsUpdateInput } from "../../../inputs/Ctscan_resultsUpdateInput";
import { Ctscan_resultsWhereUniqueInput } from "../../../inputs/Ctscan_resultsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCtscan_resultsArgs {
  @TypeGraphQL.Field(_type => Ctscan_resultsUpdateInput, {
    nullable: false
  })
  data!: Ctscan_resultsUpdateInput;

  @TypeGraphQL.Field(_type => Ctscan_resultsWhereUniqueInput, {
    nullable: false
  })
  where!: Ctscan_resultsWhereUniqueInput;
}
