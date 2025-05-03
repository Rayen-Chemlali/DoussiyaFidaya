import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enumauthorizations_level_enumFieldUpdateOperationsInput } from "../inputs/Enumauthorizations_level_enumFieldUpdateOperationsInput";
import { Instituts_medicauxUpdateOneWithoutAuthorizationsNestedInput } from "../inputs/Instituts_medicauxUpdateOneWithoutAuthorizationsNestedInput";
import { PatientsUpdateOneRequiredWithoutAuthorizationsNestedInput } from "../inputs/PatientsUpdateOneRequiredWithoutAuthorizationsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("AuthorizationsUpdateInput", {})
export class AuthorizationsUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Enumauthorizations_level_enumFieldUpdateOperationsInput, {
    nullable: true
  })
  level?: Enumauthorizations_level_enumFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxUpdateOneWithoutAuthorizationsNestedInput, {
    nullable: true
  })
  instituts_medicaux?: Instituts_medicauxUpdateOneWithoutAuthorizationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpdateOneRequiredWithoutAuthorizationsNestedInput, {
    nullable: true
  })
  patients?: PatientsUpdateOneRequiredWithoutAuthorizationsNestedInput | undefined;
}
