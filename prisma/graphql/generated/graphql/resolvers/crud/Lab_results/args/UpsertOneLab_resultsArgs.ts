import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_resultsCreateInput } from "../../../inputs/Lab_resultsCreateInput";
import { Lab_resultsUpdateInput } from "../../../inputs/Lab_resultsUpdateInput";
import { Lab_resultsWhereUniqueInput } from "../../../inputs/Lab_resultsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLab_resultsArgs {
  @TypeGraphQL.Field(_type => Lab_resultsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_resultsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lab_resultsCreateInput, {
    nullable: false
  })
  create!: Lab_resultsCreateInput;

  @TypeGraphQL.Field(_type => Lab_resultsUpdateInput, {
    nullable: false
  })
  update!: Lab_resultsUpdateInput;
}
