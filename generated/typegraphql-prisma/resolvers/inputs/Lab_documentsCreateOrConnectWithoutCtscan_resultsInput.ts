import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateWithoutCtscan_resultsInput } from "../inputs/Lab_documentsCreateWithoutCtscan_resultsInput";
import { Lab_documentsWhereUniqueInput } from "../inputs/Lab_documentsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_documentsCreateOrConnectWithoutCtscan_resultsInput", {})
export class Lab_documentsCreateOrConnectWithoutCtscan_resultsInput {
  @TypeGraphQL.Field(_type => Lab_documentsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_documentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lab_documentsCreateWithoutCtscan_resultsInput, {
    nullable: false
  })
  create!: Lab_documentsCreateWithoutCtscan_resultsInput;
}
