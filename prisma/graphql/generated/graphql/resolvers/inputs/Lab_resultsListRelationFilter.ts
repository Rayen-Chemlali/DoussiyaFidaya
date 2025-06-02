import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_resultsWhereInput } from "../inputs/Lab_resultsWhereInput";

@TypeGraphQL.InputType("Lab_resultsListRelationFilter", {})
export class Lab_resultsListRelationFilter {
  @TypeGraphQL.Field(_type => Lab_resultsWhereInput, {
    nullable: true
  })
  every?: Lab_resultsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Lab_resultsWhereInput, {
    nullable: true
  })
  some?: Lab_resultsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Lab_resultsWhereInput, {
    nullable: true
  })
  none?: Lab_resultsWhereInput | undefined;
}
