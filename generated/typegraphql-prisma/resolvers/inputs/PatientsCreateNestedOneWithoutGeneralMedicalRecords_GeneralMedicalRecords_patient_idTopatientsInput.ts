import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateOrConnectWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput } from "../inputs/PatientsCreateOrConnectWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput";
import { PatientsCreateWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput } from "../inputs/PatientsCreateWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsCreateNestedOneWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput", {})
export class PatientsCreateNestedOneWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput {
  @TypeGraphQL.Field(_type => PatientsCreateWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput, {
    nullable: true
  })
  create?: PatientsCreateWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateOrConnectWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput, {
    nullable: true
  })
  connectOrCreate?: PatientsCreateOrConnectWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientsWhereUniqueInput | undefined;
}
