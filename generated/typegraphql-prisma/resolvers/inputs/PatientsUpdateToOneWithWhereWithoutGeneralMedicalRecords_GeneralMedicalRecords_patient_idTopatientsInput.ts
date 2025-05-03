import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsUpdateWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput } from "../inputs/PatientsUpdateWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput";
import { PatientsWhereInput } from "../inputs/PatientsWhereInput";

@TypeGraphQL.InputType("PatientsUpdateToOneWithWhereWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput", {})
export class PatientsUpdateToOneWithWhereWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput {
  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  where?: PatientsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpdateWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput, {
    nullable: false
  })
  data!: PatientsUpdateWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput;
}
