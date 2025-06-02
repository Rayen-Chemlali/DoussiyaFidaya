import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { GeneralMedicalRecordsWhereInput } from "../inputs/GeneralMedicalRecordsWhereInput";
import { PatientsNullableRelationFilter } from "../inputs/PatientsNullableRelationFilter";
import { PatientsRelationFilter } from "../inputs/PatientsRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType("GeneralMedicalRecordsWhereUniqueInput", {})
export class GeneralMedicalRecordsWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  patient_id?: string | undefined;

  @TypeGraphQL.Field(_type => [GeneralMedicalRecordsWhereInput], {
    nullable: true
  })
  AND?: GeneralMedicalRecordsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GeneralMedicalRecordsWhereInput], {
    nullable: true
  })
  OR?: GeneralMedicalRecordsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GeneralMedicalRecordsWhereInput], {
    nullable: true
  })
  NOT?: GeneralMedicalRecordsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  allergies?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  bloodType?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  birthDate?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  height?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  weight?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => PatientsRelationFilter, {
    nullable: true
  })
  patients_GeneralMedicalRecords_patient_idTopatients?: PatientsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PatientsNullableRelationFilter, {
    nullable: true
  })
  patients_patients_general_medical_record_idToGeneralMedicalRecords?: PatientsNullableRelationFilter | undefined;
}
