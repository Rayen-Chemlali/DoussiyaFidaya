import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateWithoutLab_attachmentsInput } from "../inputs/Lab_documentsCreateWithoutLab_attachmentsInput";
import { Lab_documentsWhereUniqueInput } from "../inputs/Lab_documentsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_documentsCreateOrConnectWithoutLab_attachmentsInput", {})
export class Lab_documentsCreateOrConnectWithoutLab_attachmentsInput {
  @TypeGraphQL.Field(_type => Lab_documentsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_documentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lab_documentsCreateWithoutLab_attachmentsInput, {
    nullable: false
  })
  create!: Lab_documentsCreateWithoutLab_attachmentsInput;
}
