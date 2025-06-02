import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { doctors_type_enum } from "../../enums/doctors_type_enum";

@TypeGraphQL.InputType("Enumdoctors_type_enumFieldUpdateOperationsInput", {})
export class Enumdoctors_type_enumFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => doctors_type_enum, {
    nullable: true
  })
  set?: "GENERAL_PRACTITIONER" | "SPECIALIST" | "SURGEON" | undefined;
}
