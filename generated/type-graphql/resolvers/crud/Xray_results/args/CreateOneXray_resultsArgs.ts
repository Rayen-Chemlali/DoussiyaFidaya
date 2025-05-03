import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Xray_resultsCreateInput } from "../../../inputs/Xray_resultsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneXray_resultsArgs {
  @TypeGraphQL.Field(_type => Xray_resultsCreateInput, {
    nullable: false
  })
  data!: Xray_resultsCreateInput;
}
