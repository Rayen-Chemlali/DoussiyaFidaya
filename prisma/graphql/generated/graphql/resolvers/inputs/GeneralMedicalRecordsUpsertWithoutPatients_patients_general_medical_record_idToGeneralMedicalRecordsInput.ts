import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GeneralMedicalRecordsCreateWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput } from "../inputs/GeneralMedicalRecordsCreateWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput";
import { GeneralMedicalRecordsUpdateWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput } from "../inputs/GeneralMedicalRecordsUpdateWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput";
import { GeneralMedicalRecordsWhereInput } from "../inputs/GeneralMedicalRecordsWhereInput";

@TypeGraphQL.InputType("GeneralMedicalRecordsUpsertWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput", {})
export class GeneralMedicalRecordsUpsertWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput {
  @TypeGraphQL.Field(_type => GeneralMedicalRecordsUpdateWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput, {
    nullable: false
  })
  update!: GeneralMedicalRecordsUpdateWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsCreateWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput, {
    nullable: false
  })
  create!: GeneralMedicalRecordsCreateWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsWhereInput, {
    nullable: true
  })
  where?: GeneralMedicalRecordsWhereInput | undefined;
}
