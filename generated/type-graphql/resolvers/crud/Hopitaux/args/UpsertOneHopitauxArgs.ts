import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HopitauxCreateInput } from "../../../inputs/HopitauxCreateInput";
import { HopitauxUpdateInput } from "../../../inputs/HopitauxUpdateInput";
import { HopitauxWhereUniqueInput } from "../../../inputs/HopitauxWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneHopitauxArgs {
  @TypeGraphQL.Field(_type => HopitauxWhereUniqueInput, {
    nullable: false
  })
  where!: HopitauxWhereUniqueInput;

  @TypeGraphQL.Field(_type => HopitauxCreateInput, {
    nullable: false
  })
  create!: HopitauxCreateInput;

  @TypeGraphQL.Field(_type => HopitauxUpdateInput, {
    nullable: false
  })
  update!: HopitauxUpdateInput;
}
