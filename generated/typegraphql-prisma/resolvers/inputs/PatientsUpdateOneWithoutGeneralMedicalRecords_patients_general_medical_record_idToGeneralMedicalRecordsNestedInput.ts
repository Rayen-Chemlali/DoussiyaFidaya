import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateOrConnectWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput } from "../inputs/PatientsCreateOrConnectWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput";
import { PatientsCreateWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput } from "../inputs/PatientsCreateWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput";
import { PatientsUpdateToOneWithWhereWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput } from "../inputs/PatientsUpdateToOneWithWhereWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput";
import { PatientsUpsertWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput } from "../inputs/PatientsUpsertWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput";
import { PatientsWhereInput } from "../inputs/PatientsWhereInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsUpdateOneWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsNestedInput", {})
export class PatientsUpdateOneWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsNestedInput {
  @TypeGraphQL.Field(_type => PatientsCreateWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput, {
    nullable: true
  })
  create?: PatientsCreateWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateOrConnectWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput, {
    nullable: true
  })
  connectOrCreate?: PatientsCreateOrConnectWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpsertWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput, {
    nullable: true
  })
  upsert?: PatientsUpsertWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  disconnect?: PatientsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  delete?: PatientsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpdateToOneWithWhereWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput, {
    nullable: true
  })
  update?: PatientsUpdateToOneWithWhereWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput | undefined;
}
