import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsUpdateWithoutCtscan_resultsInput } from "../inputs/Lab_documentsUpdateWithoutCtscan_resultsInput";
import { Lab_documentsWhereInput } from "../inputs/Lab_documentsWhereInput";

@TypeGraphQL.InputType("Lab_documentsUpdateToOneWithWhereWithoutCtscan_resultsInput", {})
export class Lab_documentsUpdateToOneWithWhereWithoutCtscan_resultsInput {
  @TypeGraphQL.Field(_type => Lab_documentsWhereInput, {
    nullable: true
  })
  where?: Lab_documentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsUpdateWithoutCtscan_resultsInput, {
    nullable: false
  })
  data!: Lab_documentsUpdateWithoutCtscan_resultsInput;
}
