import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { instituts_medicaux_type_enum } from "../../enums/instituts_medicaux_type_enum";

@TypeGraphQL.InputType("Enuminstituts_medicaux_type_enumFieldUpdateOperationsInput", {})
export class Enuminstituts_medicaux_type_enumFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => instituts_medicaux_type_enum, {
    nullable: true
  })
  set?: "doctor" | "clinique" | "hopital" | undefined;
}
