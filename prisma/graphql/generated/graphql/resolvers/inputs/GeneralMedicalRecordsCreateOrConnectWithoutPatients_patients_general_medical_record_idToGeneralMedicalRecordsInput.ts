import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GeneralMedicalRecordsCreateWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput } from "../inputs/GeneralMedicalRecordsCreateWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput";
import { GeneralMedicalRecordsWhereUniqueInput } from "../inputs/GeneralMedicalRecordsWhereUniqueInput";

@TypeGraphQL.InputType("GeneralMedicalRecordsCreateOrConnectWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput", {})
export class GeneralMedicalRecordsCreateOrConnectWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput {
  @TypeGraphQL.Field(_type => GeneralMedicalRecordsWhereUniqueInput, {
    nullable: false
  })
  where!: GeneralMedicalRecordsWhereUniqueInput;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsCreateWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput, {
    nullable: false
  })
  create!: GeneralMedicalRecordsCreateWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput;
}
