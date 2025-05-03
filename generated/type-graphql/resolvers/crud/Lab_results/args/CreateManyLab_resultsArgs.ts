import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_resultsCreateManyInput } from "../../../inputs/Lab_resultsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLab_resultsArgs {
  @TypeGraphQL.Field(_type => [Lab_resultsCreateManyInput], {
    nullable: false
  })
  data!: Lab_resultsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
