import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GeneralMedicalRecordsCreateOrConnectWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput } from "../inputs/GeneralMedicalRecordsCreateOrConnectWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput";
import { GeneralMedicalRecordsCreateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput } from "../inputs/GeneralMedicalRecordsCreateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput";
import { GeneralMedicalRecordsWhereUniqueInput } from "../inputs/GeneralMedicalRecordsWhereUniqueInput";

@TypeGraphQL.InputType("GeneralMedicalRecordsCreateNestedOneWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput", {})
export class GeneralMedicalRecordsCreateNestedOneWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput {
  @TypeGraphQL.Field(_type => GeneralMedicalRecordsCreateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput, {
    nullable: true
  })
  create?: GeneralMedicalRecordsCreateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsCreateOrConnectWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput, {
    nullable: true
  })
  connectOrCreate?: GeneralMedicalRecordsCreateOrConnectWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsWhereUniqueInput, {
    nullable: true
  })
  connect?: GeneralMedicalRecordsWhereUniqueInput | undefined;
}
