import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateOrConnectWithoutLab_resultsInput } from "../inputs/Lab_documentsCreateOrConnectWithoutLab_resultsInput";
import { Lab_documentsCreateWithoutLab_resultsInput } from "../inputs/Lab_documentsCreateWithoutLab_resultsInput";
import { Lab_documentsWhereUniqueInput } from "../inputs/Lab_documentsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_documentsCreateNestedOneWithoutLab_resultsInput", {})
export class Lab_documentsCreateNestedOneWithoutLab_resultsInput {
  @TypeGraphQL.Field(_type => Lab_documentsCreateWithoutLab_resultsInput, {
    nullable: true
  })
  create?: Lab_documentsCreateWithoutLab_resultsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsCreateOrConnectWithoutLab_resultsInput, {
    nullable: true
  })
  connectOrCreate?: Lab_documentsCreateOrConnectWithoutLab_resultsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsWhereUniqueInput, {
    nullable: true
  })
  connect?: Lab_documentsWhereUniqueInput | undefined;
}
