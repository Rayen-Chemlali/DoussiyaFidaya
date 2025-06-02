import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateWithoutXray_resultsInput } from "../inputs/Lab_documentsCreateWithoutXray_resultsInput";
import { Lab_documentsUpdateWithoutXray_resultsInput } from "../inputs/Lab_documentsUpdateWithoutXray_resultsInput";
import { Lab_documentsWhereInput } from "../inputs/Lab_documentsWhereInput";

@TypeGraphQL.InputType("Lab_documentsUpsertWithoutXray_resultsInput", {})
export class Lab_documentsUpsertWithoutXray_resultsInput {
  @TypeGraphQL.Field(_type => Lab_documentsUpdateWithoutXray_resultsInput, {
    nullable: false
  })
  update!: Lab_documentsUpdateWithoutXray_resultsInput;

  @TypeGraphQL.Field(_type => Lab_documentsCreateWithoutXray_resultsInput, {
    nullable: false
  })
  create!: Lab_documentsCreateWithoutXray_resultsInput;

  @TypeGraphQL.Field(_type => Lab_documentsWhereInput, {
    nullable: true
  })
  where?: Lab_documentsWhereInput | undefined;
}
