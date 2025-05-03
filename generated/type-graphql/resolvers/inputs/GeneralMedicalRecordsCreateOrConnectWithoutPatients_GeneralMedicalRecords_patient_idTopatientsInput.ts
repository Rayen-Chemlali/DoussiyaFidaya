import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GeneralMedicalRecordsCreateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput } from "../inputs/GeneralMedicalRecordsCreateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput";
import { GeneralMedicalRecordsWhereUniqueInput } from "../inputs/GeneralMedicalRecordsWhereUniqueInput";

@TypeGraphQL.InputType("GeneralMedicalRecordsCreateOrConnectWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput", {})
export class GeneralMedicalRecordsCreateOrConnectWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput {
  @TypeGraphQL.Field(_type => GeneralMedicalRecordsWhereUniqueInput, {
    nullable: false
  })
  where!: GeneralMedicalRecordsWhereUniqueInput;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsCreateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput, {
    nullable: false
  })
  create!: GeneralMedicalRecordsCreateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput;
}
