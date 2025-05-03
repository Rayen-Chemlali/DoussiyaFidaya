import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Ctscan_resultsWhereInput } from "../inputs/Ctscan_resultsWhereInput";

@TypeGraphQL.InputType("Ctscan_resultsListRelationFilter", {})
export class Ctscan_resultsListRelationFilter {
  @TypeGraphQL.Field(_type => Ctscan_resultsWhereInput, {
    nullable: true
  })
  every?: Ctscan_resultsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Ctscan_resultsWhereInput, {
    nullable: true
  })
  some?: Ctscan_resultsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Ctscan_resultsWhereInput, {
    nullable: true
  })
  none?: Ctscan_resultsWhereInput | undefined;
}
