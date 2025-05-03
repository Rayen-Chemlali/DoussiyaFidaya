import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Ctscan_resultsCreateInput } from "../../../inputs/Ctscan_resultsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCtscan_resultsArgs {
  @TypeGraphQL.Field(_type => Ctscan_resultsCreateInput, {
    nullable: false
  })
  data!: Ctscan_resultsCreateInput;
}
