import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Ctscan_resultsWhereInput } from "../../inputs/Ctscan_resultsWhereInput";

@TypeGraphQL.ArgsType()
export class Lab_documentsCountCtscan_resultsArgs {
  @TypeGraphQL.Field(_type => Ctscan_resultsWhereInput, {
    nullable: true
  })
  where?: Ctscan_resultsWhereInput | undefined;
}
