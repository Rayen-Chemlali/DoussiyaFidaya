import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Analysis_resultsListRelationFilter } from "../inputs/Analysis_resultsListRelationFilter";
import { Ctscan_resultsListRelationFilter } from "../inputs/Ctscan_resultsListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Enumlab_documents_status_enumFilter } from "../inputs/Enumlab_documents_status_enumFilter";
import { Lab_attachmentsListRelationFilter } from "../inputs/Lab_attachmentsListRelationFilter";
import { Lab_requestsNullableRelationFilter } from "../inputs/Lab_requestsNullableRelationFilter";
import { Lab_resultsListRelationFilter } from "../inputs/Lab_resultsListRelationFilter";
import { LaboratoriesNullableRelationFilter } from "../inputs/LaboratoriesNullableRelationFilter";
import { PatientsRelationFilter } from "../inputs/PatientsRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";
import { Xray_resultsListRelationFilter } from "../inputs/Xray_resultsListRelationFilter";

@TypeGraphQL.InputType("Lab_documentsWhereInput", {})
export class Lab_documentsWhereInput {
  @TypeGraphQL.Field(_type => [Lab_documentsWhereInput], {
    nullable: true
  })
  AND?: Lab_documentsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsWhereInput], {
    nullable: true
  })
  OR?: Lab_documentsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsWhereInput], {
    nullable: true
  })
  NOT?: Lab_documentsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  completed_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  notes?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  requested_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => Enumlab_documents_status_enumFilter, {
    nullable: true
  })
  status?: Enumlab_documents_status_enumFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  section?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  patient_id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableFilter, {
    nullable: true
  })
  laboratory_id?: UuidNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableFilter, {
    nullable: true
  })
  lab_request_id?: UuidNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Analysis_resultsListRelationFilter, {
    nullable: true
  })
  analysis_results?: Analysis_resultsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Ctscan_resultsListRelationFilter, {
    nullable: true
  })
  ctscan_results?: Ctscan_resultsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Lab_attachmentsListRelationFilter, {
    nullable: true
  })
  lab_attachments?: Lab_attachmentsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LaboratoriesNullableRelationFilter, {
    nullable: true
  })
  laboratories?: LaboratoriesNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PatientsRelationFilter, {
    nullable: true
  })
  patients?: PatientsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsNullableRelationFilter, {
    nullable: true
  })
  lab_requests?: Lab_requestsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Lab_resultsListRelationFilter, {
    nullable: true
  })
  lab_results?: Lab_resultsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Xray_resultsListRelationFilter, {
    nullable: true
  })
  xray_results?: Xray_resultsListRelationFilter | undefined;
}
