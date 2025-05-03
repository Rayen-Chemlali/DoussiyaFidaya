import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_resultsCreateWithoutLab_documentsInput } from "../inputs/Lab_resultsCreateWithoutLab_documentsInput";
import { Lab_resultsWhereUniqueInput } from "../inputs/Lab_resultsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_resultsCreateOrConnectWithoutLab_documentsInput", {})
export class Lab_resultsCreateOrConnectWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => Lab_resultsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_resultsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lab_resultsCreateWithoutLab_documentsInput, {
    nullable: false
  })
  create!: Lab_resultsCreateWithoutLab_documentsInput;
}
