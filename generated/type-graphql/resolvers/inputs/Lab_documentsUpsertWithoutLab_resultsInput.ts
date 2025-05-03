import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateWithoutLab_resultsInput } from "../inputs/Lab_documentsCreateWithoutLab_resultsInput";
import { Lab_documentsUpdateWithoutLab_resultsInput } from "../inputs/Lab_documentsUpdateWithoutLab_resultsInput";
import { Lab_documentsWhereInput } from "../inputs/Lab_documentsWhereInput";

@TypeGraphQL.InputType("Lab_documentsUpsertWithoutLab_resultsInput", {})
export class Lab_documentsUpsertWithoutLab_resultsInput {
  @TypeGraphQL.Field(_type => Lab_documentsUpdateWithoutLab_resultsInput, {
    nullable: false
  })
  update!: Lab_documentsUpdateWithoutLab_resultsInput;

  @TypeGraphQL.Field(_type => Lab_documentsCreateWithoutLab_resultsInput, {
    nullable: false
  })
  create!: Lab_documentsCreateWithoutLab_resultsInput;

  @TypeGraphQL.Field(_type => Lab_documentsWhereInput, {
    nullable: true
  })
  where?: Lab_documentsWhereInput | undefined;
}
