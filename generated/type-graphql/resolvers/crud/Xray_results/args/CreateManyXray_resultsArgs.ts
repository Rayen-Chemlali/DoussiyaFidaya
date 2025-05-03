import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Xray_resultsCreateManyInput } from "../../../inputs/Xray_resultsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyXray_resultsArgs {
  @TypeGraphQL.Field(_type => [Xray_resultsCreateManyInput], {
    nullable: false
  })
  data!: Xray_resultsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
