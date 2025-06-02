import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_resultsWhereInput } from "../../../inputs/Lab_resultsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLab_resultsArgs {
  @TypeGraphQL.Field(_type => Lab_resultsWhereInput, {
    nullable: true
  })
  where?: Lab_resultsWhereInput | undefined;
}
