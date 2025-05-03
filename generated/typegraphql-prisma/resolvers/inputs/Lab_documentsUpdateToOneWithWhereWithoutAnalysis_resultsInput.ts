import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsUpdateWithoutAnalysis_resultsInput } from "../inputs/Lab_documentsUpdateWithoutAnalysis_resultsInput";
import { Lab_documentsWhereInput } from "../inputs/Lab_documentsWhereInput";

@TypeGraphQL.InputType("Lab_documentsUpdateToOneWithWhereWithoutAnalysis_resultsInput", {})
export class Lab_documentsUpdateToOneWithWhereWithoutAnalysis_resultsInput {
  @TypeGraphQL.Field(_type => Lab_documentsWhereInput, {
    nullable: true
  })
  where?: Lab_documentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsUpdateWithoutAnalysis_resultsInput, {
    nullable: false
  })
  data!: Lab_documentsUpdateWithoutAnalysis_resultsInput;
}
