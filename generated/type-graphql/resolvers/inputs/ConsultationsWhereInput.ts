import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DoctorsNullableRelationFilter } from "../inputs/DoctorsNullableRelationFilter";
import { Instituts_medicauxNullableRelationFilter } from "../inputs/Instituts_medicauxNullableRelationFilter";
import { JsonNullableFilter } from "../inputs/JsonNullableFilter";
import { Lab_requestsListRelationFilter } from "../inputs/Lab_requestsListRelationFilter";
import { PatientsRelationFilter } from "../inputs/PatientsRelationFilter";
import { PrescriptionsNullableRelationFilter } from "../inputs/PrescriptionsNullableRelationFilter";
import { RdvsNullableRelationFilter } from "../inputs/RdvsNullableRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";

@TypeGraphQL.InputType("ConsultationsWhereInput", {})
export class ConsultationsWhereInput {
  @TypeGraphQL.Field(_type => [ConsultationsWhereInput], {
    nullable: true
  })
  AND?: ConsultationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsWhereInput], {
    nullable: true
  })
  OR?: ConsultationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsWhereInput], {
    nullable: true
  })
  NOT?: ConsultationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  section?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  notes?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => JsonNullableFilter, {
    nullable: true
  })
  measures?: JsonNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableFilter, {
    nullable: true
  })
  doctor_id?: UuidNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableFilter, {
    nullable: true
  })
  institut_medical_id?: UuidNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableFilter, {
    nullable: true
  })
  prescription_id?: UuidNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  patient_id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsListRelationFilter, {
    nullable: true
  })
  lab_requests?: Lab_requestsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsNullableRelationFilter, {
    nullable: true
  })
  prescriptions?: PrescriptionsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxNullableRelationFilter, {
    nullable: true
  })
  instituts_medicaux?: Instituts_medicauxNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PatientsRelationFilter, {
    nullable: true
  })
  patients?: PatientsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DoctorsNullableRelationFilter, {
    nullable: true
  })
  doctors?: DoctorsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RdvsNullableRelationFilter, {
    nullable: true
  })
  rdvs?: RdvsNullableRelationFilter | undefined;
}
