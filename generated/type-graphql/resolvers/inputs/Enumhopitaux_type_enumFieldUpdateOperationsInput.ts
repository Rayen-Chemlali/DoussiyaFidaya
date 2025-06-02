import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { hopitaux_type_enum } from "../../enums/hopitaux_type_enum";

@TypeGraphQL.InputType("Enumhopitaux_type_enumFieldUpdateOperationsInput", {})
export class Enumhopitaux_type_enumFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => hopitaux_type_enum, {
    nullable: true
  })
  set?: "doctor" | "clinique" | "hopital" | undefined;
}
