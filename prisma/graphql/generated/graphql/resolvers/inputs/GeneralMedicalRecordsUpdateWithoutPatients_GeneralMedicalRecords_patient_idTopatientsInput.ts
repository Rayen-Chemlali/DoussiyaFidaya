import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GeneralMedicalRecordsUpdateallergiesInput } from "../inputs/GeneralMedicalRecordsUpdateallergiesInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PatientsUpdateOneWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsNestedInput } from "../inputs/PatientsUpdateOneWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("GeneralMedicalRecordsUpdateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput", {})
export class GeneralMedicalRecordsUpdateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsUpdateallergiesInput, {
    nullable: true
  })
  allergies?: GeneralMedicalRecordsUpdateallergiesInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  bloodType?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  birthDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  height?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  weight?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpdateOneWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsNestedInput, {
    nullable: true
  })
  patients_patients_general_medical_record_idToGeneralMedicalRecords?: PatientsUpdateOneWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsNestedInput | undefined;
}
