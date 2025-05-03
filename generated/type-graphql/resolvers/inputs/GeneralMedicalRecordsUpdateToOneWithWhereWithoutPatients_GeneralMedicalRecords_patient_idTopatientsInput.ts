import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GeneralMedicalRecordsUpdateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput } from "../inputs/GeneralMedicalRecordsUpdateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput";
import { GeneralMedicalRecordsWhereInput } from "../inputs/GeneralMedicalRecordsWhereInput";

@TypeGraphQL.InputType("GeneralMedicalRecordsUpdateToOneWithWhereWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput", {})
export class GeneralMedicalRecordsUpdateToOneWithWhereWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput {
  @TypeGraphQL.Field(_type => GeneralMedicalRecordsWhereInput, {
    nullable: true
  })
  where?: GeneralMedicalRecordsWhereInput | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsUpdateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput, {
    nullable: false
  })
  data!: GeneralMedicalRecordsUpdateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput;
}
