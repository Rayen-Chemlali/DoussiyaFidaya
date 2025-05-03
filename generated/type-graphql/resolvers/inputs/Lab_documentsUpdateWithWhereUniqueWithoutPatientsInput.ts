import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsUpdateWithoutPatientsInput } from "../inputs/Lab_documentsUpdateWithoutPatientsInput";
import { Lab_documentsWhereUniqueInput } from "../inputs/Lab_documentsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_documentsUpdateWithWhereUniqueWithoutPatientsInput", {})
export class Lab_documentsUpdateWithWhereUniqueWithoutPatientsInput {
  @TypeGraphQL.Field(_type => Lab_documentsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_documentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lab_documentsUpdateWithoutPatientsInput, {
    nullable: false
  })
  data!: Lab_documentsUpdateWithoutPatientsInput;
}
