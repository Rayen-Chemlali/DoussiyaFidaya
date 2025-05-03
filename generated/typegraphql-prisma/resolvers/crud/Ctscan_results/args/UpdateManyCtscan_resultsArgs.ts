import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Ctscan_resultsUpdateManyMutationInput } from "../../../inputs/Ctscan_resultsUpdateManyMutationInput";
import { Ctscan_resultsWhereInput } from "../../../inputs/Ctscan_resultsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCtscan_resultsArgs {
  @TypeGraphQL.Field(_type => Ctscan_resultsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Ctscan_resultsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Ctscan_resultsWhereInput, {
    nullable: true
  })
  where?: Ctscan_resultsWhereInput | undefined;
}
