import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsCreateNestedManyWithoutPatientsInput } from "../inputs/AuthorizationsCreateNestedManyWithoutPatientsInput";
import { ConsultationsCreateNestedManyWithoutPatientsInput } from "../inputs/ConsultationsCreateNestedManyWithoutPatientsInput";
import { GeneralMedicalRecordsCreateNestedOneWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput } from "../inputs/GeneralMedicalRecordsCreateNestedOneWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput";
import { GeneralMedicalRecordsCreateNestedOneWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput } from "../inputs/GeneralMedicalRecordsCreateNestedOneWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput";
import { Lab_documentsCreateNestedManyWithoutPatientsInput } from "../inputs/Lab_documentsCreateNestedManyWithoutPatientsInput";
import { Lab_requestsCreateNestedManyWithoutPatientsInput } from "../inputs/Lab_requestsCreateNestedManyWithoutPatientsInput";
import { PrescriptionsCreateNestedManyWithoutPatientsInput } from "../inputs/PrescriptionsCreateNestedManyWithoutPatientsInput";
import { Rdv_requestsCreateNestedManyWithoutPatientsInput } from "../inputs/Rdv_requestsCreateNestedManyWithoutPatientsInput";
import { RdvsCreateNestedManyWithoutPatientsInput } from "../inputs/RdvsCreateNestedManyWithoutPatientsInput";
import { UsersCreateNestedOneWithoutPatientsInput } from "../inputs/UsersCreateNestedOneWithoutPatientsInput";
import { patients_gender_enum } from "../../enums/patients_gender_enum";

@TypeGraphQL.InputType("PatientsCreateWithoutCertificatesInput", {})
export class PatientsCreateWithoutCertificatesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cin!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date_of_birth!: Date;

  @TypeGraphQL.Field(_type => patients_gender_enum, {
    nullable: false
  })
  gender!: "Male" | "Female";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profile_image?: string | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsCreateNestedOneWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput, {
    nullable: true
  })
  GeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatients?: GeneralMedicalRecordsCreateNestedOneWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput | undefined;

  @TypeGraphQL.Field(_type => AuthorizationsCreateNestedManyWithoutPatientsInput, {
    nullable: true
  })
  authorizations?: AuthorizationsCreateNestedManyWithoutPatientsInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsCreateNestedManyWithoutPatientsInput, {
    nullable: true
  })
  consultations?: ConsultationsCreateNestedManyWithoutPatientsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsCreateNestedManyWithoutPatientsInput, {
    nullable: true
  })
  lab_documents?: Lab_documentsCreateNestedManyWithoutPatientsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsCreateNestedManyWithoutPatientsInput, {
    nullable: true
  })
  lab_requests?: Lab_requestsCreateNestedManyWithoutPatientsInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateNestedOneWithoutPatientsInput, {
    nullable: true
  })
  users?: UsersCreateNestedOneWithoutPatientsInput | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsCreateNestedOneWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput, {
    nullable: true
  })
  GeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecords?: GeneralMedicalRecordsCreateNestedOneWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsCreateNestedManyWithoutPatientsInput, {
    nullable: true
  })
  prescriptions?: PrescriptionsCreateNestedManyWithoutPatientsInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsCreateNestedManyWithoutPatientsInput, {
    nullable: true
  })
  rdv_requests?: Rdv_requestsCreateNestedManyWithoutPatientsInput | undefined;

  @TypeGraphQL.Field(_type => RdvsCreateNestedManyWithoutPatientsInput, {
    nullable: true
  })
  rdvs?: RdvsCreateNestedManyWithoutPatientsInput | undefined;
}
