import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsUpdateManyWithoutInstituts_medicauxNestedInput } from "../inputs/AuthorizationsUpdateManyWithoutInstituts_medicauxNestedInput";
import { DoctorsUpdateManyWithoutInstitutsNestedInput } from "../inputs/DoctorsUpdateManyWithoutInstitutsNestedInput";
import { Enuminstituts_medicaux_type_enumFieldUpdateOperationsInput } from "../inputs/Enuminstituts_medicaux_type_enumFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Instituts_medicauxUpdateWithoutConsultationsInput", {})
export class Instituts_medicauxUpdateWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Enuminstituts_medicaux_type_enumFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: Enuminstituts_medicaux_type_enumFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AuthorizationsUpdateManyWithoutInstituts_medicauxNestedInput, {
    nullable: true
  })
  authorizations?: AuthorizationsUpdateManyWithoutInstituts_medicauxNestedInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateManyWithoutInstitutsNestedInput, {
    nullable: true
  })
  doctors?: DoctorsUpdateManyWithoutInstitutsNestedInput | undefined;
}
