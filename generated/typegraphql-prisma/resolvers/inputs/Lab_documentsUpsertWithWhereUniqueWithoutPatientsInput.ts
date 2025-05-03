import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateWithoutPatientsInput } from "../inputs/Lab_documentsCreateWithoutPatientsInput";
import { Lab_documentsUpdateWithoutPatientsInput } from "../inputs/Lab_documentsUpdateWithoutPatientsInput";
import { Lab_documentsWhereUniqueInput } from "../inputs/Lab_documentsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_documentsUpsertWithWhereUniqueWithoutPatientsInput", {})
export class Lab_documentsUpsertWithWhereUniqueWithoutPatientsInput {
  @TypeGraphQL.Field(_type => Lab_documentsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_documentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lab_documentsUpdateWithoutPatientsInput, {
    nullable: false
  })
  update!: Lab_documentsUpdateWithoutPatientsInput;

  @TypeGraphQL.Field(_type => Lab_documentsCreateWithoutPatientsInput, {
    nullable: false
  })
  create!: Lab_documentsCreateWithoutPatientsInput;
}
