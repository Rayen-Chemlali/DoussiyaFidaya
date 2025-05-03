import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HopitauxWhereUniqueInput } from "../../../inputs/HopitauxWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneHopitauxArgs {
  @TypeGraphQL.Field(_type => HopitauxWhereUniqueInput, {
    nullable: false
  })
  where!: HopitauxWhereUniqueInput;
}
