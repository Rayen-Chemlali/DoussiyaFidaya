import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GeneralMedicalRecordsCreateOrConnectWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput } from "../inputs/GeneralMedicalRecordsCreateOrConnectWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput";
import { GeneralMedicalRecordsCreateWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput } from "../inputs/GeneralMedicalRecordsCreateWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput";
import { GeneralMedicalRecordsUpdateToOneWithWhereWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput } from "../inputs/GeneralMedicalRecordsUpdateToOneWithWhereWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput";
import { GeneralMedicalRecordsUpsertWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput } from "../inputs/GeneralMedicalRecordsUpsertWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput";
import { GeneralMedicalRecordsWhereInput } from "../inputs/GeneralMedicalRecordsWhereInput";
import { GeneralMedicalRecordsWhereUniqueInput } from "../inputs/GeneralMedicalRecordsWhereUniqueInput";

@TypeGraphQL.InputType("GeneralMedicalRecordsUpdateOneWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsNestedInput", {})
export class GeneralMedicalRecordsUpdateOneWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsNestedInput {
  @TypeGraphQL.Field(_type => GeneralMedicalRecordsCreateWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput, {
    nullable: true
  })
  create?: GeneralMedicalRecordsCreateWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsCreateOrConnectWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput, {
    nullable: true
  })
  connectOrCreate?: GeneralMedicalRecordsCreateOrConnectWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsUpsertWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput, {
    nullable: true
  })
  upsert?: GeneralMedicalRecordsUpsertWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput | undefined;

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

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsUpdateToOneWithWhereWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput, {
    nullable: true
  })
  update?: GeneralMedicalRecordsUpdateToOneWithWhereWithoutPatients_patients_general_medical_record_idToGeneralMedicalRecordsInput | undefined;
}
