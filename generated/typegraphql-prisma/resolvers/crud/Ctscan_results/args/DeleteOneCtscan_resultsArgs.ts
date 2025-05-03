import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Ctscan_resultsWhereUniqueInput } from "../../../inputs/Ctscan_resultsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneCtscan_resultsArgs {
  @TypeGraphQL.Field(_type => Ctscan_resultsWhereUniqueInput, {
    nullable: false
  })
  where!: Ctscan_resultsWhereUniqueInput;
}
