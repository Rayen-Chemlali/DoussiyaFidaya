import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HopitauxUpdateInput } from "../../../inputs/HopitauxUpdateInput";
import { HopitauxWhereUniqueInput } from "../../../inputs/HopitauxWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneHopitauxArgs {
  @TypeGraphQL.Field(_type => HopitauxUpdateInput, {
    nullable: false
  })
  data!: HopitauxUpdateInput;

  @TypeGraphQL.Field(_type => HopitauxWhereUniqueInput, {
    nullable: false
  })
  where!: HopitauxWhereUniqueInput;
}
