import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Xray_resultsWhereInput } from "../../inputs/Xray_resultsWhereInput";

@TypeGraphQL.ArgsType()
export class Lab_documentsCountXray_resultsArgs {
  @TypeGraphQL.Field(_type => Xray_resultsWhereInput, {
    nullable: true
  })
  where?: Xray_resultsWhereInput | undefined;
}
