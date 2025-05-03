import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsUpdateManyWithoutInstituts_medicauxNestedInput } from "../inputs/AuthorizationsUpdateManyWithoutInstituts_medicauxNestedInput";
import { ConsultationsUpdateManyWithoutInstituts_medicauxNestedInput } from "../inputs/ConsultationsUpdateManyWithoutInstituts_medicauxNestedInput";
import { Doctor_institutsUpdateManyWithoutInstituts_medicauxNestedInput } from "../inputs/Doctor_institutsUpdateManyWithoutInstituts_medicauxNestedInput";
import { Enuminstituts_medicaux_type_enumFieldUpdateOperationsInput } from "../inputs/Enuminstituts_medicaux_type_enumFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Instituts_medicauxUpdateInput", {})
export class Instituts_medicauxUpdateInput {
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

  @TypeGraphQL.Field(_type => ConsultationsUpdateManyWithoutInstituts_medicauxNestedInput, {
    nullable: true
  })
  consultations?: ConsultationsUpdateManyWithoutInstituts_medicauxNestedInput | undefined;

  @TypeGraphQL.Field(_type => Doctor_institutsUpdateManyWithoutInstituts_medicauxNestedInput, {
    nullable: true
  })
  doctor_instituts?: Doctor_institutsUpdateManyWithoutInstituts_medicauxNestedInput | undefined;
}
