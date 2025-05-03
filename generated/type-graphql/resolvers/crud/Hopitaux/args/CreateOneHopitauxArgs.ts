import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HopitauxCreateInput } from "../../../inputs/HopitauxCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneHopitauxArgs {
  @TypeGraphQL.Field(_type => HopitauxCreateInput, {
    nullable: false
  })
  data!: HopitauxCreateInput;
}
