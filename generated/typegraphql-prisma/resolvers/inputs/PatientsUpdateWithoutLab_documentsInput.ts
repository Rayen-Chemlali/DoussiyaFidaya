import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsUpdateManyWithoutPatientsNestedInput } from "../inputs/AuthorizationsUpdateManyWithoutPatientsNestedInput";
import { CertificatesUpdateManyWithoutPatientsNestedInput } from "../inputs/CertificatesUpdateManyWithoutPatientsNestedInput";
import { ConsultationsUpdateManyWithoutPatientsNestedInput } from "../inputs/ConsultationsUpdateManyWithoutPatientsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { Enumpatients_gender_enumFieldUpdateOperationsInput } from "../inputs/Enumpatients_gender_enumFieldUpdateOperationsInput";
import { GeneralMedicalRecordsUpdateOneWithoutPatients_GeneralMedicalRecords_patient_idTopatientsNestedInput } from "../inputs/GeneralMedicalRecordsUpdateOneWithoutPatients_GeneralMedicalRecords_patient_idTopatientsNestedInput";
import { GeneralMedicalRecordsUpdateOneWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsNestedInput } from "../inputs/GeneralMedicalRecordsUpdateOneWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsNestedInput";
import { Lab_requestsUpdateManyWithoutPatientsNestedInput } from "../inputs/Lab_requestsUpdateManyWithoutPatientsNestedInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PrescriptionsUpdateManyWithoutPatientsNestedInput } from "../inputs/PrescriptionsUpdateManyWithoutPatientsNestedInput";
import { Rdv_requestsUpdateManyWithoutPatientsNestedInput } from "../inputs/Rdv_requestsUpdateManyWithoutPatientsNestedInput";
import { RdvsUpdateManyWithoutPatientsNestedInput } from "../inputs/RdvsUpdateManyWithoutPatientsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UsersUpdateOneWithoutPatientsNestedInput } from "../inputs/UsersUpdateOneWithoutPatientsNestedInput";

@TypeGraphQL.InputType("PatientsUpdateWithoutLab_documentsInput", {})
export class PatientsUpdateWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  cin?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  date_of_birth?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Enumpatients_gender_enumFieldUpdateOperationsInput, {
    nullable: true
  })
  gender?: Enumpatients_gender_enumFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  profile_image?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsUpdateOneWithoutPatients_GeneralMedicalRecords_patient_idTopatientsNestedInput, {
    nullable: true
  })
  GeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatients?: GeneralMedicalRecordsUpdateOneWithoutPatients_GeneralMedicalRecords_patient_idTopatientsNestedInput | undefined;

  @TypeGraphQL.Field(_type => AuthorizationsUpdateManyWithoutPatientsNestedInput, {
    nullable: true
  })
  authorizations?: AuthorizationsUpdateManyWithoutPatientsNestedInput | undefined;

  @TypeGraphQL.Field(_type => CertificatesUpdateManyWithoutPatientsNestedInput, {
    nullable: true
  })
  certificates?: CertificatesUpdateManyWithoutPatientsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsUpdateManyWithoutPatientsNestedInput, {
    nullable: true
  })
  consultations?: ConsultationsUpdateManyWithoutPatientsNestedInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsUpdateManyWithoutPatientsNestedInput, {
    nullable: true
  })
  lab_requests?: Lab_requestsUpdateManyWithoutPatientsNestedInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpdateOneWithoutPatientsNestedInput, {
    nullable: true
  })
  users?: UsersUpdateOneWithoutPatientsNestedInput | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsUpdateOneWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsNestedInput, {
    nullable: true
  })
  GeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecords?: GeneralMedicalRecordsUpdateOneWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsUpdateManyWithoutPatientsNestedInput, {
    nullable: true
  })
  prescriptions?: PrescriptionsUpdateManyWithoutPatientsNestedInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsUpdateManyWithoutPatientsNestedInput, {
    nullable: true
  })
  rdv_requests?: Rdv_requestsUpdateManyWithoutPatientsNestedInput | undefined;

  @TypeGraphQL.Field(_type => RdvsUpdateManyWithoutPatientsNestedInput, {
    nullable: true
  })
  rdvs?: RdvsUpdateManyWithoutPatientsNestedInput | undefined;
}
