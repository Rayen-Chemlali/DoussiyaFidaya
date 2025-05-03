import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Analysis_resultsWhereInput } from "../inputs/Analysis_resultsWhereInput";

@TypeGraphQL.InputType("Analysis_resultsListRelationFilter", {})
export class Analysis_resultsListRelationFilter {
  @TypeGraphQL.Field(_type => Analysis_resultsWhereInput, {
    nullable: true
  })
  every?: Analysis_resultsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Analysis_resultsWhereInput, {
    nullable: true
  })
  some?: Analysis_resultsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Analysis_resultsWhereInput, {
    nullable: true
  })
  none?: Analysis_resultsWhereInput | undefined;
}
