import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HopitauxUpdateManyMutationInput } from "../../../inputs/HopitauxUpdateManyMutationInput";
import { HopitauxWhereInput } from "../../../inputs/HopitauxWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyHopitauxArgs {
  @TypeGraphQL.Field(_type => HopitauxUpdateManyMutationInput, {
    nullable: false
  })
  data!: HopitauxUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => HopitauxWhereInput, {
    nullable: true
  })
  where?: HopitauxWhereInput | undefined;
}
