import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { cliniques_type_enum } from "../../enums/cliniques_type_enum";

@TypeGraphQL.InputType("Enumcliniques_type_enumFieldUpdateOperationsInput", {})
export class Enumcliniques_type_enumFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => cliniques_type_enum, {
    nullable: true
  })
  set?: "doctor" | "clinique" | "hopital" | undefined;
}
