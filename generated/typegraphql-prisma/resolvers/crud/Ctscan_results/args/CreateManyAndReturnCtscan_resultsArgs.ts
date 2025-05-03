import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Ctscan_resultsCreateManyInput } from "../../../inputs/Ctscan_resultsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnCtscan_resultsArgs {
  @TypeGraphQL.Field(_type => [Ctscan_resultsCreateManyInput], {
    nullable: false
  })
  data!: Ctscan_resultsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
