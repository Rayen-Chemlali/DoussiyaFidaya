import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateOrConnectWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput } from "../inputs/PatientsCreateOrConnectWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput";
import { PatientsCreateWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput } from "../inputs/PatientsCreateWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput";
import { PatientsUpdateToOneWithWhereWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput } from "../inputs/PatientsUpdateToOneWithWhereWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput";
import { PatientsUpsertWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput } from "../inputs/PatientsUpsertWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsUpdateOneRequiredWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsNestedInput", {})
export class PatientsUpdateOneRequiredWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsNestedInput {
  @TypeGraphQL.Field(_type => PatientsCreateWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput, {
    nullable: true
  })
  create?: PatientsCreateWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateOrConnectWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput, {
    nullable: true
  })
  connectOrCreate?: PatientsCreateOrConnectWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpsertWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput, {
    nullable: true
  })
  upsert?: PatientsUpsertWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpdateToOneWithWhereWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput, {
    nullable: true
  })
  update?: PatientsUpdateToOneWithWhereWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput | undefined;
}
