import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput } from "../inputs/PatientsCreateWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput";
import { PatientsUpdateWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput } from "../inputs/PatientsUpdateWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput";
import { PatientsWhereInput } from "../inputs/PatientsWhereInput";

@TypeGraphQL.InputType("PatientsUpsertWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput", {})
export class PatientsUpsertWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput {
  @TypeGraphQL.Field(_type => PatientsUpdateWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput, {
    nullable: false
  })
  update!: PatientsUpdateWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput;

  @TypeGraphQL.Field(_type => PatientsCreateWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput, {
    nullable: false
  })
  create!: PatientsCreateWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput;

  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  where?: PatientsWhereInput | undefined;
}
