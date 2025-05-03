import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DoctorsUpdateOneWithoutPrescriptionsNestedInput } from "../inputs/DoctorsUpdateOneWithoutPrescriptionsNestedInput";
import { Enumprescriptions_status_enumFieldUpdateOperationsInput } from "../inputs/Enumprescriptions_status_enumFieldUpdateOperationsInput";
import { MedicationsUpdateManyWithoutPrescriptionsNestedInput } from "../inputs/MedicationsUpdateManyWithoutPrescriptionsNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PatientsUpdateOneRequiredWithoutPrescriptionsNestedInput } from "../inputs/PatientsUpdateOneRequiredWithoutPrescriptionsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PrescriptionsUpdateWithoutConsultationsInput", {})
export class PrescriptionsUpdateWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  date?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  instructions?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  is_signed?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  section?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Enumprescriptions_status_enumFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: Enumprescriptions_status_enumFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MedicationsUpdateManyWithoutPrescriptionsNestedInput, {
    nullable: true
  })
  medications?: MedicationsUpdateManyWithoutPrescriptionsNestedInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateOneWithoutPrescriptionsNestedInput, {
    nullable: true
  })
  doctors?: DoctorsUpdateOneWithoutPrescriptionsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpdateOneRequiredWithoutPrescriptionsNestedInput, {
    nullable: true
  })
  patients?: PatientsUpdateOneRequiredWithoutPrescriptionsNestedInput | undefined;
}
