import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GeneralMedicalRecordsCreateOrConnectWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput } from "../inputs/GeneralMedicalRecordsCreateOrConnectWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput";
import { GeneralMedicalRecordsCreateWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput } from "../inputs/GeneralMedicalRecordsCreateWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput";
import { GeneralMedicalRecordsWhereUniqueInput } from "../inputs/GeneralMedicalRecordsWhereUniqueInput";

@TypeGraphQL.InputType("GeneralMedicalRecordsCreateNestedOneWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput", {})
export class GeneralMedicalRecordsCreateNestedOneWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput {
  @TypeGraphQL.Field(_type => GeneralMedicalRecordsCreateWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput, {
    nullable: true
  })
  create?: GeneralMedicalRecordsCreateWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsCreateOrConnectWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput, {
    nullable: true
  })
  connectOrCreate?: GeneralMedicalRecordsCreateOrConnectWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsWhereUniqueInput, {
    nullable: true
  })
  connect?: GeneralMedicalRecordsWhereUniqueInput | undefined;
}
