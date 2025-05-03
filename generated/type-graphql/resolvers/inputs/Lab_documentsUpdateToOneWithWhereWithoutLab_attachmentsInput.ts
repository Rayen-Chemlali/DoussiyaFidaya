import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsUpdateWithoutLab_attachmentsInput } from "../inputs/Lab_documentsUpdateWithoutLab_attachmentsInput";
import { Lab_documentsWhereInput } from "../inputs/Lab_documentsWhereInput";

@TypeGraphQL.InputType("Lab_documentsUpdateToOneWithWhereWithoutLab_attachmentsInput", {})
export class Lab_documentsUpdateToOneWithWhereWithoutLab_attachmentsInput {
  @TypeGraphQL.Field(_type => Lab_documentsWhereInput, {
    nullable: true
  })
  where?: Lab_documentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsUpdateWithoutLab_attachmentsInput, {
    nullable: false
  })
  data!: Lab_documentsUpdateWithoutLab_attachmentsInput;
}
