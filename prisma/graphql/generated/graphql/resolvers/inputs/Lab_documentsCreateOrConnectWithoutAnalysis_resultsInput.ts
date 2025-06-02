import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateWithoutAnalysis_resultsInput } from "../inputs/Lab_documentsCreateWithoutAnalysis_resultsInput";
import { Lab_documentsWhereUniqueInput } from "../inputs/Lab_documentsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_documentsCreateOrConnectWithoutAnalysis_resultsInput", {})
export class Lab_documentsCreateOrConnectWithoutAnalysis_resultsInput {
  @TypeGraphQL.Field(_type => Lab_documentsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_documentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lab_documentsCreateWithoutAnalysis_resultsInput, {
    nullable: false
  })
  create!: Lab_documentsCreateWithoutAnalysis_resultsInput;
}
