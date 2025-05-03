import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Analysis_resultsUpdateManyWithoutLab_documentsNestedInput } from "../inputs/Analysis_resultsUpdateManyWithoutLab_documentsNestedInput";
import { Ctscan_resultsUpdateManyWithoutLab_documentsNestedInput } from "../inputs/Ctscan_resultsUpdateManyWithoutLab_documentsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { Enumlab_documents_status_enumFieldUpdateOperationsInput } from "../inputs/Enumlab_documents_status_enumFieldUpdateOperationsInput";
import { Lab_attachmentsUpdateManyWithoutLab_documentsNestedInput } from "../inputs/Lab_attachmentsUpdateManyWithoutLab_documentsNestedInput";
import { Lab_requestsUpdateOneWithoutLab_documentsNestedInput } from "../inputs/Lab_requestsUpdateOneWithoutLab_documentsNestedInput";
import { Lab_resultsUpdateManyWithoutLab_documentsNestedInput } from "../inputs/Lab_resultsUpdateManyWithoutLab_documentsNestedInput";
import { LaboratoriesUpdateOneWithoutLab_documentsNestedInput } from "../inputs/LaboratoriesUpdateOneWithoutLab_documentsNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PatientsUpdateOneRequiredWithoutLab_documentsNestedInput } from "../inputs/PatientsUpdateOneRequiredWithoutLab_documentsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { Xray_resultsUpdateManyWithoutLab_documentsNestedInput } from "../inputs/Xray_resultsUpdateManyWithoutLab_documentsNestedInput";

@TypeGraphQL.InputType("Lab_documentsUpdateInput", {})
export class Lab_documentsUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  completed_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  notes?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  requested_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Enumlab_documents_status_enumFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: Enumlab_documents_status_enumFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  section?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Analysis_resultsUpdateManyWithoutLab_documentsNestedInput, {
    nullable: true
  })
  analysis_results?: Analysis_resultsUpdateManyWithoutLab_documentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => Ctscan_resultsUpdateManyWithoutLab_documentsNestedInput, {
    nullable: true
  })
  ctscan_results?: Ctscan_resultsUpdateManyWithoutLab_documentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => Lab_attachmentsUpdateManyWithoutLab_documentsNestedInput, {
    nullable: true
  })
  lab_attachments?: Lab_attachmentsUpdateManyWithoutLab_documentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => LaboratoriesUpdateOneWithoutLab_documentsNestedInput, {
    nullable: true
  })
  laboratories?: LaboratoriesUpdateOneWithoutLab_documentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpdateOneRequiredWithoutLab_documentsNestedInput, {
    nullable: true
  })
  patients?: PatientsUpdateOneRequiredWithoutLab_documentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsUpdateOneWithoutLab_documentsNestedInput, {
    nullable: true
  })
  lab_requests?: Lab_requestsUpdateOneWithoutLab_documentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => Lab_resultsUpdateManyWithoutLab_documentsNestedInput, {
    nullable: true
  })
  lab_results?: Lab_resultsUpdateManyWithoutLab_documentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => Xray_resultsUpdateManyWithoutLab_documentsNestedInput, {
    nullable: true
  })
  xray_results?: Xray_resultsUpdateManyWithoutLab_documentsNestedInput | undefined;
}
