import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_attachmentsCreateWithoutLab_documentsInput } from "../inputs/Lab_attachmentsCreateWithoutLab_documentsInput";
import { Lab_attachmentsUpdateWithoutLab_documentsInput } from "../inputs/Lab_attachmentsUpdateWithoutLab_documentsInput";
import { Lab_attachmentsWhereUniqueInput } from "../inputs/Lab_attachmentsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_attachmentsUpsertWithWhereUniqueWithoutLab_documentsInput", {})
export class Lab_attachmentsUpsertWithWhereUniqueWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => Lab_attachmentsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_attachmentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lab_attachmentsUpdateWithoutLab_documentsInput, {
    nullable: false
  })
  update!: Lab_attachmentsUpdateWithoutLab_documentsInput;

  @TypeGraphQL.Field(_type => Lab_attachmentsCreateWithoutLab_documentsInput, {
    nullable: false
  })
  create!: Lab_attachmentsCreateWithoutLab_documentsInput;
}
