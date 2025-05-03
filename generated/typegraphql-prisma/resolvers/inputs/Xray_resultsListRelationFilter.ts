import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Xray_resultsWhereInput } from "../inputs/Xray_resultsWhereInput";

@TypeGraphQL.InputType("Xray_resultsListRelationFilter", {})
export class Xray_resultsListRelationFilter {
  @TypeGraphQL.Field(_type => Xray_resultsWhereInput, {
    nullable: true
  })
  every?: Xray_resultsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Xray_resultsWhereInput, {
    nullable: true
  })
  some?: Xray_resultsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Xray_resultsWhereInput, {
    nullable: true
  })
  none?: Xray_resultsWhereInput | undefined;
}
