import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsUpdateWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput } from "../inputs/PatientsUpdateWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput";
import { PatientsWhereInput } from "../inputs/PatientsWhereInput";

@TypeGraphQL.InputType("PatientsUpdateToOneWithWhereWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput", {})
export class PatientsUpdateToOneWithWhereWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput {
  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  where?: PatientsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpdateWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput, {
    nullable: false
  })
  data!: PatientsUpdateWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput;
}
