import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateWithoutCtscan_resultsInput } from "../inputs/Lab_documentsCreateWithoutCtscan_resultsInput";
import { Lab_documentsUpdateWithoutCtscan_resultsInput } from "../inputs/Lab_documentsUpdateWithoutCtscan_resultsInput";
import { Lab_documentsWhereInput } from "../inputs/Lab_documentsWhereInput";

@TypeGraphQL.InputType("Lab_documentsUpsertWithoutCtscan_resultsInput", {})
export class Lab_documentsUpsertWithoutCtscan_resultsInput {
  @TypeGraphQL.Field(_type => Lab_documentsUpdateWithoutCtscan_resultsInput, {
    nullable: false
  })
  update!: Lab_documentsUpdateWithoutCtscan_resultsInput;

  @TypeGraphQL.Field(_type => Lab_documentsCreateWithoutCtscan_resultsInput, {
    nullable: false
  })
  create!: Lab_documentsCreateWithoutCtscan_resultsInput;

  @TypeGraphQL.Field(_type => Lab_documentsWhereInput, {
    nullable: true
  })
  where?: Lab_documentsWhereInput | undefined;
}
