import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_resultsWhereUniqueInput } from "../../../inputs/Lab_resultsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueLab_resultsOrThrowArgs {
  @TypeGraphQL.Field(_type => Lab_resultsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_resultsWhereUniqueInput;
}
