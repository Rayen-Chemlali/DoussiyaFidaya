import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_resultsCreateInput } from "../../../inputs/Lab_resultsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLab_resultsArgs {
  @TypeGraphQL.Field(_type => Lab_resultsCreateInput, {
    nullable: false
  })
  data!: Lab_resultsCreateInput;
}
