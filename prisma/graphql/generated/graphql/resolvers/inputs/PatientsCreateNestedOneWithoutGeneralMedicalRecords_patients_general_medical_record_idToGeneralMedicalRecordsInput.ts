import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateOrConnectWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput } from "../inputs/PatientsCreateOrConnectWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput";
import { PatientsCreateWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput } from "../inputs/PatientsCreateWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsCreateNestedOneWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput", {})
export class PatientsCreateNestedOneWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput {
  @TypeGraphQL.Field(_type => PatientsCreateWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput, {
    nullable: true
  })
  create?: PatientsCreateWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateOrConnectWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput, {
    nullable: true
  })
  connectOrCreate?: PatientsCreateOrConnectWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientsWhereUniqueInput | undefined;
}
