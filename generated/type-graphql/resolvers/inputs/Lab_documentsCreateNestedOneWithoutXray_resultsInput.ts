import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateOrConnectWithoutXray_resultsInput } from "../inputs/Lab_documentsCreateOrConnectWithoutXray_resultsInput";
import { Lab_documentsCreateWithoutXray_resultsInput } from "../inputs/Lab_documentsCreateWithoutXray_resultsInput";
import { Lab_documentsWhereUniqueInput } from "../inputs/Lab_documentsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_documentsCreateNestedOneWithoutXray_resultsInput", {})
export class Lab_documentsCreateNestedOneWithoutXray_resultsInput {
  @TypeGraphQL.Field(_type => Lab_documentsCreateWithoutXray_resultsInput, {
    nullable: true
  })
  create?: Lab_documentsCreateWithoutXray_resultsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsCreateOrConnectWithoutXray_resultsInput, {
    nullable: true
  })
  connectOrCreate?: Lab_documentsCreateOrConnectWithoutXray_resultsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsWhereUniqueInput, {
    nullable: true
  })
  connect?: Lab_documentsWhereUniqueInput | undefined;
}
