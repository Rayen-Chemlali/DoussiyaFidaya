import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateWithoutAnalysis_resultsInput } from "../inputs/Lab_documentsCreateWithoutAnalysis_resultsInput";
import { Lab_documentsUpdateWithoutAnalysis_resultsInput } from "../inputs/Lab_documentsUpdateWithoutAnalysis_resultsInput";
import { Lab_documentsWhereInput } from "../inputs/Lab_documentsWhereInput";

@TypeGraphQL.InputType("Lab_documentsUpsertWithoutAnalysis_resultsInput", {})
export class Lab_documentsUpsertWithoutAnalysis_resultsInput {
  @TypeGraphQL.Field(_type => Lab_documentsUpdateWithoutAnalysis_resultsInput, {
    nullable: false
  })
  update!: Lab_documentsUpdateWithoutAnalysis_resultsInput;

  @TypeGraphQL.Field(_type => Lab_documentsCreateWithoutAnalysis_resultsInput, {
    nullable: false
  })
  create!: Lab_documentsCreateWithoutAnalysis_resultsInput;

  @TypeGraphQL.Field(_type => Lab_documentsWhereInput, {
    nullable: true
  })
  where?: Lab_documentsWhereInput | undefined;
}
