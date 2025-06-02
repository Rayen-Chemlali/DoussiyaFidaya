import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateOrConnectWithoutCtscan_resultsInput } from "../inputs/Lab_documentsCreateOrConnectWithoutCtscan_resultsInput";
import { Lab_documentsCreateWithoutCtscan_resultsInput } from "../inputs/Lab_documentsCreateWithoutCtscan_resultsInput";
import { Lab_documentsWhereUniqueInput } from "../inputs/Lab_documentsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_documentsCreateNestedOneWithoutCtscan_resultsInput", {})
export class Lab_documentsCreateNestedOneWithoutCtscan_resultsInput {
  @TypeGraphQL.Field(_type => Lab_documentsCreateWithoutCtscan_resultsInput, {
    nullable: true
  })
  create?: Lab_documentsCreateWithoutCtscan_resultsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsCreateOrConnectWithoutCtscan_resultsInput, {
    nullable: true
  })
  connectOrCreate?: Lab_documentsCreateOrConnectWithoutCtscan_resultsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsWhereUniqueInput, {
    nullable: true
  })
  connect?: Lab_documentsWhereUniqueInput | undefined;
}
