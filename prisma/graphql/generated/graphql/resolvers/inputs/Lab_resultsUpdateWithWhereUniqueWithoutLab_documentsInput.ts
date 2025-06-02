import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_resultsUpdateWithoutLab_documentsInput } from "../inputs/Lab_resultsUpdateWithoutLab_documentsInput";
import { Lab_resultsWhereUniqueInput } from "../inputs/Lab_resultsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_resultsUpdateWithWhereUniqueWithoutLab_documentsInput", {})
export class Lab_resultsUpdateWithWhereUniqueWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => Lab_resultsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_resultsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lab_resultsUpdateWithoutLab_documentsInput, {
    nullable: false
  })
  data!: Lab_resultsUpdateWithoutLab_documentsInput;
}
