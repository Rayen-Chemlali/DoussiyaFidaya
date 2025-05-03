import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GeneralMedicalRecordsCreateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput } from "../inputs/GeneralMedicalRecordsCreateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput";
import { GeneralMedicalRecordsUpdateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput } from "../inputs/GeneralMedicalRecordsUpdateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput";
import { GeneralMedicalRecordsWhereInput } from "../inputs/GeneralMedicalRecordsWhereInput";

@TypeGraphQL.InputType("GeneralMedicalRecordsUpsertWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput", {})
export class GeneralMedicalRecordsUpsertWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput {
  @TypeGraphQL.Field(_type => GeneralMedicalRecordsUpdateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput, {
    nullable: false
  })
  update!: GeneralMedicalRecordsUpdateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsCreateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput, {
    nullable: false
  })
  create!: GeneralMedicalRecordsCreateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsWhereInput, {
    nullable: true
  })
  where?: GeneralMedicalRecordsWhereInput | undefined;
}
