import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Analysis_resultsUpdateWithoutLab_documentsInput } from "../inputs/Analysis_resultsUpdateWithoutLab_documentsInput";
import { Analysis_resultsWhereUniqueInput } from "../inputs/Analysis_resultsWhereUniqueInput";

@TypeGraphQL.InputType("Analysis_resultsUpdateWithWhereUniqueWithoutLab_documentsInput", {})
export class Analysis_resultsUpdateWithWhereUniqueWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => Analysis_resultsWhereUniqueInput, {
    nullable: false
  })
  where!: Analysis_resultsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Analysis_resultsUpdateWithoutLab_documentsInput, {
    nullable: false
  })
  data!: Analysis_resultsUpdateWithoutLab_documentsInput;
}
