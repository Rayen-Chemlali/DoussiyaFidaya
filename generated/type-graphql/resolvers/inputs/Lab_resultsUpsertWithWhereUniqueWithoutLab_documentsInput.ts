import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_resultsCreateWithoutLab_documentsInput } from "../inputs/Lab_resultsCreateWithoutLab_documentsInput";
import { Lab_resultsUpdateWithoutLab_documentsInput } from "../inputs/Lab_resultsUpdateWithoutLab_documentsInput";
import { Lab_resultsWhereUniqueInput } from "../inputs/Lab_resultsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_resultsUpsertWithWhereUniqueWithoutLab_documentsInput", {})
export class Lab_resultsUpsertWithWhereUniqueWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => Lab_resultsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_resultsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lab_resultsUpdateWithoutLab_documentsInput, {
    nullable: false
  })
  update!: Lab_resultsUpdateWithoutLab_documentsInput;

  @TypeGraphQL.Field(_type => Lab_resultsCreateWithoutLab_documentsInput, {
    nullable: false
  })
  create!: Lab_resultsCreateWithoutLab_documentsInput;
}
