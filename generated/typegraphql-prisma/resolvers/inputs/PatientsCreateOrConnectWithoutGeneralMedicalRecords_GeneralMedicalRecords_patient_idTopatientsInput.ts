import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput } from "../inputs/PatientsCreateWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsCreateOrConnectWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput", {})
export class PatientsCreateOrConnectWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput {
  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: false
  })
  where!: PatientsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientsCreateWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput, {
    nullable: false
  })
  create!: PatientsCreateWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput;
}
