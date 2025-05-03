import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enumauthorizations_level_enumFieldUpdateOperationsInput } from "../inputs/Enumauthorizations_level_enumFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("AuthorizationsUpdateManyMutationInput", {})
export class AuthorizationsUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Enumauthorizations_level_enumFieldUpdateOperationsInput, {
    nullable: true
  })
  level?: Enumauthorizations_level_enumFieldUpdateOperationsInput | undefined;
}
