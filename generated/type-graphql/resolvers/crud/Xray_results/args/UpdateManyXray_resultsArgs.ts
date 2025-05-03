import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Xray_resultsUpdateManyMutationInput } from "../../../inputs/Xray_resultsUpdateManyMutationInput";
import { Xray_resultsWhereInput } from "../../../inputs/Xray_resultsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyXray_resultsArgs {
  @TypeGraphQL.Field(_type => Xray_resultsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Xray_resultsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Xray_resultsWhereInput, {
    nullable: true
  })
  where?: Xray_resultsWhereInput | undefined;
}
