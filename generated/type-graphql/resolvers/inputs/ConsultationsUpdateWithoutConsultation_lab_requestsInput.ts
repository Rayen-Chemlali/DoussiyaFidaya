import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsUpdatenotesInput } from "../inputs/ConsultationsUpdatenotesInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DoctorsUpdateOneWithoutConsultationsNestedInput } from "../inputs/DoctorsUpdateOneWithoutConsultationsNestedInput";
import { Instituts_medicauxUpdateOneWithoutConsultationsNestedInput } from "../inputs/Instituts_medicauxUpdateOneWithoutConsultationsNestedInput";
import { Lab_requestsUpdateManyWithoutConsultationsNestedInput } from "../inputs/Lab_requestsUpdateManyWithoutConsultationsNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PatientsUpdateOneRequiredWithoutConsultationsNestedInput } from "../inputs/PatientsUpdateOneRequiredWithoutConsultationsNestedInput";
import { PrescriptionsUpdateOneWithoutConsultationsNestedInput } from "../inputs/PrescriptionsUpdateOneWithoutConsultationsNestedInput";
import { RdvsUpdateOneWithoutConsultationsNestedInput } from "../inputs/RdvsUpdateOneWithoutConsultationsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ConsultationsUpdateWithoutConsultation_lab_requestsInput", {})
export class ConsultationsUpdateWithoutConsultation_lab_requestsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  section?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  date?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsUpdatenotesInput, {
    nullable: true
  })
  notes?: ConsultationsUpdatenotesInput | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  measures?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsUpdateOneWithoutConsultationsNestedInput, {
    nullable: true
  })
  prescriptions?: PrescriptionsUpdateOneWithoutConsultationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxUpdateOneWithoutConsultationsNestedInput, {
    nullable: true
  })
  instituts_medicaux?: Instituts_medicauxUpdateOneWithoutConsultationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpdateOneRequiredWithoutConsultationsNestedInput, {
    nullable: true
  })
  patients?: PatientsUpdateOneRequiredWithoutConsultationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateOneWithoutConsultationsNestedInput, {
    nullable: true
  })
  doctors?: DoctorsUpdateOneWithoutConsultationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => RdvsUpdateOneWithoutConsultationsNestedInput, {
    nullable: true
  })
  rdvs?: RdvsUpdateOneWithoutConsultationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsUpdateManyWithoutConsultationsNestedInput, {
    nullable: true
  })
  lab_requests?: Lab_requestsUpdateManyWithoutConsultationsNestedInput | undefined;
}
