import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateWithoutLaboratoriesInput } from "../inputs/Lab_documentsCreateWithoutLaboratoriesInput";
import { Lab_documentsUpdateWithoutLaboratoriesInput } from "../inputs/Lab_documentsUpdateWithoutLaboratoriesInput";
import { Lab_documentsWhereUniqueInput } from "../inputs/Lab_documentsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_documentsUpsertWithWhereUniqueWithoutLaboratoriesInput", {})
export class Lab_documentsUpsertWithWhereUniqueWithoutLaboratoriesInput {
  @TypeGraphQL.Field(_type => Lab_documentsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_documentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lab_documentsUpdateWithoutLaboratoriesInput, {
    nullable: false
  })
  update!: Lab_documentsUpdateWithoutLaboratoriesInput;

  @TypeGraphQL.Field(_type => Lab_documentsCreateWithoutLaboratoriesInput, {
    nullable: false
  })
  create!: Lab_documentsCreateWithoutLaboratoriesInput;
}
