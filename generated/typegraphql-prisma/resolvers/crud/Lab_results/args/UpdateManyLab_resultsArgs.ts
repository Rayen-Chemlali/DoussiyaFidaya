import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_resultsUpdateManyMutationInput } from "../../../inputs/Lab_resultsUpdateManyMutationInput";
import { Lab_resultsWhereInput } from "../../../inputs/Lab_resultsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLab_resultsArgs {
  @TypeGraphQL.Field(_type => Lab_resultsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Lab_resultsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Lab_resultsWhereInput, {
    nullable: true
  })
  where?: Lab_resultsWhereInput | undefined;
}
