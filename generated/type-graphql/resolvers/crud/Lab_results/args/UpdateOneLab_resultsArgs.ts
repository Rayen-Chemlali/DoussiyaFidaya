import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_resultsUpdateInput } from "../../../inputs/Lab_resultsUpdateInput";
import { Lab_resultsWhereUniqueInput } from "../../../inputs/Lab_resultsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneLab_resultsArgs {
  @TypeGraphQL.Field(_type => Lab_resultsUpdateInput, {
    nullable: false
  })
  data!: Lab_resultsUpdateInput;

  @TypeGraphQL.Field(_type => Lab_resultsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_resultsWhereUniqueInput;
}
