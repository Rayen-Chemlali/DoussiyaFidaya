import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GeneralMedicalRecordsCreateOrConnectWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput } from "../inputs/GeneralMedicalRecordsCreateOrConnectWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput";
import { GeneralMedicalRecordsCreateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput } from "../inputs/GeneralMedicalRecordsCreateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput";
import { GeneralMedicalRecordsUpdateToOneWithWhereWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput } from "../inputs/GeneralMedicalRecordsUpdateToOneWithWhereWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput";
import { GeneralMedicalRecordsUpsertWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput } from "../inputs/GeneralMedicalRecordsUpsertWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput";
import { GeneralMedicalRecordsWhereInput } from "../inputs/GeneralMedicalRecordsWhereInput";
import { GeneralMedicalRecordsWhereUniqueInput } from "../inputs/GeneralMedicalRecordsWhereUniqueInput";

@TypeGraphQL.InputType("GeneralMedicalRecordsUpdateOneWithoutPatients_GeneralMedicalRecords_patient_idTopatientsNestedInput", {})
export class GeneralMedicalRecordsUpdateOneWithoutPatients_GeneralMedicalRecords_patient_idTopatientsNestedInput {
  @TypeGraphQL.Field(_type => GeneralMedicalRecordsCreateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput, {
    nullable: true
  })
  create?: GeneralMedicalRecordsCreateWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsCreateOrConnectWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput, {
    nullable: true
  })
  connectOrCreate?: GeneralMedicalRecordsCreateOrConnectWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsUpsertWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput, {
    nullable: true
  })
  upsert?: GeneralMedicalRecordsUpsertWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsWhereInput, {
    nullable: true
  })
  disconnect?: GeneralMedicalRecordsWhereInput | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsWhereInput, {
    nullable: true
  })
  delete?: GeneralMedicalRecordsWhereInput | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsWhereUniqueInput, {
    nullable: true
  })
  connect?: GeneralMedicalRecordsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsUpdateToOneWithWhereWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput, {
    nullable: true
  })
  update?: GeneralMedicalRecordsUpdateToOneWithWhereWithoutPatients_GeneralMedicalRecords_patient_idTopatientsInput | undefined;
}
