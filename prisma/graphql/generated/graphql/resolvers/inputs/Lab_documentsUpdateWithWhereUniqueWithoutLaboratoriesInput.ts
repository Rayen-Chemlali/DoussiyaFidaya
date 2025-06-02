import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsUpdateWithoutLaboratoriesInput } from "../inputs/Lab_documentsUpdateWithoutLaboratoriesInput";
import { Lab_documentsWhereUniqueInput } from "../inputs/Lab_documentsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_documentsUpdateWithWhereUniqueWithoutLaboratoriesInput", {})
export class Lab_documentsUpdateWithWhereUniqueWithoutLaboratoriesInput {
  @TypeGraphQL.Field(_type => Lab_documentsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_documentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lab_documentsUpdateWithoutLaboratoriesInput, {
    nullable: false
  })
  data!: Lab_documentsUpdateWithoutLaboratoriesInput;
}
