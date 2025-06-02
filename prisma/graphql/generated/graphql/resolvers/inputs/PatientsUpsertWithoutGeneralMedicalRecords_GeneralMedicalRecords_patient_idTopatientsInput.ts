import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput } from "../inputs/PatientsCreateWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput";
import { PatientsUpdateWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput } from "../inputs/PatientsUpdateWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput";
import { PatientsWhereInput } from "../inputs/PatientsWhereInput";

@TypeGraphQL.InputType("PatientsUpsertWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput", {})
export class PatientsUpsertWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput {
  @TypeGraphQL.Field(_type => PatientsUpdateWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput, {
    nullable: false
  })
  update!: PatientsUpdateWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput;

  @TypeGraphQL.Field(_type => PatientsCreateWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput, {
    nullable: false
  })
  create!: PatientsCreateWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput;

  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  where?: PatientsWhereInput | undefined;
}
