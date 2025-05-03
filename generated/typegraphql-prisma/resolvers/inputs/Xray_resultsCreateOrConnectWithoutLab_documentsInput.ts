import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Xray_resultsCreateWithoutLab_documentsInput } from "../inputs/Xray_resultsCreateWithoutLab_documentsInput";
import { Xray_resultsWhereUniqueInput } from "../inputs/Xray_resultsWhereUniqueInput";

@TypeGraphQL.InputType("Xray_resultsCreateOrConnectWithoutLab_documentsInput", {})
export class Xray_resultsCreateOrConnectWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => Xray_resultsWhereUniqueInput, {
    nullable: false
  })
  where!: Xray_resultsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Xray_resultsCreateWithoutLab_documentsInput, {
    nullable: false
  })
  create!: Xray_resultsCreateWithoutLab_documentsInput;
}
