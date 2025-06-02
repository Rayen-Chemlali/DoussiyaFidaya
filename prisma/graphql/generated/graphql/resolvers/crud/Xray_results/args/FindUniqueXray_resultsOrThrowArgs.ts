import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Xray_resultsWhereUniqueInput } from "../../../inputs/Xray_resultsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueXray_resultsOrThrowArgs {
  @TypeGraphQL.Field(_type => Xray_resultsWhereUniqueInput, {
    nullable: false
  })
  where!: Xray_resultsWhereUniqueInput;
}
