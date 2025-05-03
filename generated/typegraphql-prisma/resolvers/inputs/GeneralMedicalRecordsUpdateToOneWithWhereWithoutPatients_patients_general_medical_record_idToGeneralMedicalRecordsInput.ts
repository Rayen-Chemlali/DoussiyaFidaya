import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GeneralMedicalRecordsUpdateWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput } from "../inputs/GeneralMedicalRecordsUpdateWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput";
import { GeneralMedicalRecordsWhereInput } from "../inputs/GeneralMedicalRecordsWhereInput";

@TypeGraphQL.InputType("GeneralMedicalRecordsUpdateToOneWithWhereWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput", {})
export class GeneralMedicalRecordsUpdateToOneWithWhereWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput {
  @TypeGraphQL.Field(_type => GeneralMedicalRecordsWhereInput, {
    nullable: true
  })
  where?: GeneralMedicalRecordsWhereInput | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsUpdateWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput, {
    nullable: false
  })
  data!: GeneralMedicalRecordsUpdateWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput;
}
