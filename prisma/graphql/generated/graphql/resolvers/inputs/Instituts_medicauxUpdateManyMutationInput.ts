import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enuminstituts_medicaux_type_enumFieldUpdateOperationsInput } from "../inputs/Enuminstituts_medicaux_type_enumFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Instituts_medicauxUpdateManyMutationInput", {})
export class Instituts_medicauxUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Enuminstituts_medicaux_type_enumFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: Enuminstituts_medicaux_type_enumFieldUpdateOperationsInput | undefined;
}
