import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Analysis_resultsCreateWithoutLab_documentsInput } from "../inputs/Analysis_resultsCreateWithoutLab_documentsInput";
import { Analysis_resultsWhereUniqueInput } from "../inputs/Analysis_resultsWhereUniqueInput";

@TypeGraphQL.InputType("Analysis_resultsCreateOrConnectWithoutLab_documentsInput", {})
export class Analysis_resultsCreateOrConnectWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => Analysis_resultsWhereUniqueInput, {
    nullable: false
  })
  where!: Analysis_resultsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Analysis_resultsCreateWithoutLab_documentsInput, {
    nullable: false
  })
  create!: Analysis_resultsCreateWithoutLab_documentsInput;
}
