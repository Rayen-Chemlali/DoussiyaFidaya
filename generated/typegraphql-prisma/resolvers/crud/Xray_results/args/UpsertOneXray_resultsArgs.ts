import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Xray_resultsCreateInput } from "../../../inputs/Xray_resultsCreateInput";
import { Xray_resultsUpdateInput } from "../../../inputs/Xray_resultsUpdateInput";
import { Xray_resultsWhereUniqueInput } from "../../../inputs/Xray_resultsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneXray_resultsArgs {
  @TypeGraphQL.Field(_type => Xray_resultsWhereUniqueInput, {
    nullable: false
  })
  where!: Xray_resultsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Xray_resultsCreateInput, {
    nullable: false
  })
  create!: Xray_resultsCreateInput;

  @TypeGraphQL.Field(_type => Xray_resultsUpdateInput, {
    nullable: false
  })
  update!: Xray_resultsUpdateInput;
}
