import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput } from "../inputs/PatientsCreateWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsCreateOrConnectWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput", {})
export class PatientsCreateOrConnectWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput {
  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: false
  })
  where!: PatientsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientsCreateWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput, {
    nullable: false
  })
  create!: PatientsCreateWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput;
}
