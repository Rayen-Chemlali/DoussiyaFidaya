import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Xray_resultsUpdateInput } from "../../../inputs/Xray_resultsUpdateInput";
import { Xray_resultsWhereUniqueInput } from "../../../inputs/Xray_resultsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneXray_resultsArgs {
  @TypeGraphQL.Field(_type => Xray_resultsUpdateInput, {
    nullable: false
  })
  data!: Xray_resultsUpdateInput;

  @TypeGraphQL.Field(_type => Xray_resultsWhereUniqueInput, {
    nullable: false
  })
  where!: Xray_resultsWhereUniqueInput;
}
