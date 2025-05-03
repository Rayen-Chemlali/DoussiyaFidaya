import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Ctscan_resultsCreateWithoutLab_documentsInput } from "../inputs/Ctscan_resultsCreateWithoutLab_documentsInput";
import { Ctscan_resultsUpdateWithoutLab_documentsInput } from "../inputs/Ctscan_resultsUpdateWithoutLab_documentsInput";
import { Ctscan_resultsWhereUniqueInput } from "../inputs/Ctscan_resultsWhereUniqueInput";

@TypeGraphQL.InputType("Ctscan_resultsUpsertWithWhereUniqueWithoutLab_documentsInput", {})
export class Ctscan_resultsUpsertWithWhereUniqueWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => Ctscan_resultsWhereUniqueInput, {
    nullable: false
  })
  where!: Ctscan_resultsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Ctscan_resultsUpdateWithoutLab_documentsInput, {
    nullable: false
  })
  update!: Ctscan_resultsUpdateWithoutLab_documentsInput;

  @TypeGraphQL.Field(_type => Ctscan_resultsCreateWithoutLab_documentsInput, {
    nullable: false
  })
  create!: Ctscan_resultsCreateWithoutLab_documentsInput;
}
