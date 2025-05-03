import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HopitauxWhereInput } from "../../../inputs/HopitauxWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyHopitauxArgs {
  @TypeGraphQL.Field(_type => HopitauxWhereInput, {
    nullable: true
  })
  where?: HopitauxWhereInput | undefined;
}
