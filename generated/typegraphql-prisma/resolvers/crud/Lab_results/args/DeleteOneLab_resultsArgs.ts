import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_resultsWhereUniqueInput } from "../../../inputs/Lab_resultsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneLab_resultsArgs {
  @TypeGraphQL.Field(_type => Lab_resultsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_resultsWhereUniqueInput;
}
