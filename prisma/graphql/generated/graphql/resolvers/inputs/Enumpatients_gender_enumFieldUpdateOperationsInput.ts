import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { patients_gender_enum } from "../../enums/patients_gender_enum";

@TypeGraphQL.InputType("Enumpatients_gender_enumFieldUpdateOperationsInput", {})
export class Enumpatients_gender_enumFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => patients_gender_enum, {
    nullable: true
  })
  set?: "MALE" | "FEMALE" | "OTHER" | undefined;
}
