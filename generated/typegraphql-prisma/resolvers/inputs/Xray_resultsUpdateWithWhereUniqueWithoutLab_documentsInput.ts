import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Xray_resultsUpdateWithoutLab_documentsInput } from "../inputs/Xray_resultsUpdateWithoutLab_documentsInput";
import { Xray_resultsWhereUniqueInput } from "../inputs/Xray_resultsWhereUniqueInput";

@TypeGraphQL.InputType("Xray_resultsUpdateWithWhereUniqueWithoutLab_documentsInput", {})
export class Xray_resultsUpdateWithWhereUniqueWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => Xray_resultsWhereUniqueInput, {
    nullable: false
  })
  where!: Xray_resultsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Xray_resultsUpdateWithoutLab_documentsInput, {
    nullable: false
  })
  data!: Xray_resultsUpdateWithoutLab_documentsInput;
}
