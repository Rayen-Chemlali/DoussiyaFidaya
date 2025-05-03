import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsListRelationFilter } from "../inputs/AuthorizationsListRelationFilter";
import { CertificatesListRelationFilter } from "../inputs/CertificatesListRelationFilter";
import { ConsultationsListRelationFilter } from "../inputs/ConsultationsListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { Enumpatients_gender_enumFilter } from "../inputs/Enumpatients_gender_enumFilter";
import { GeneralMedicalRecordsNullableRelationFilter } from "../inputs/GeneralMedicalRecordsNullableRelationFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { Lab_documentsListRelationFilter } from "../inputs/Lab_documentsListRelationFilter";
import { Lab_requestsListRelationFilter } from "../inputs/Lab_requestsListRelationFilter";
import { PrescriptionsListRelationFilter } from "../inputs/PrescriptionsListRelationFilter";
import { Rdv_requestsListRelationFilter } from "../inputs/Rdv_requestsListRelationFilter";
import { RdvsListRelationFilter } from "../inputs/RdvsListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UsersNullableRelationFilter } from "../inputs/UsersNullableRelationFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";

@TypeGraphQL.InputType("PatientsWhereInput", {})
export class PatientsWhereInput {
  @TypeGraphQL.Field(_type => [PatientsWhereInput], {
    nullable: true
  })
  AND?: PatientsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientsWhereInput], {
    nullable: true
  })
  OR?: PatientsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientsWhereInput], {
    nullable: true
  })
  NOT?: PatientsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  cin?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date_of_birth?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => Enumpatients_gender_enumFilter, {
    nullable: true
  })
  gender?: Enumpatients_gender_enumFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  profile_image?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableFilter, {
    nullable: true
  })
  general_medical_record_id?: UuidNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableFilter, {
    nullable: true
  })
  user_id?: UuidNullableFilter | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsNullableRelationFilter, {
    nullable: true
  })
  GeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatients?: GeneralMedicalRecordsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AuthorizationsListRelationFilter, {
    nullable: true
  })
  authorizations?: AuthorizationsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CertificatesListRelationFilter, {
    nullable: true
  })
  certificates?: CertificatesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ConsultationsListRelationFilter, {
    nullable: true
  })
  consultations?: ConsultationsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsListRelationFilter, {
    nullable: true
  })
  lab_documents?: Lab_documentsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsListRelationFilter, {
    nullable: true
  })
  lab_requests?: Lab_requestsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UsersNullableRelationFilter, {
    nullable: true
  })
  users?: UsersNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsNullableRelationFilter, {
    nullable: true
  })
  GeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecords?: GeneralMedicalRecordsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsListRelationFilter, {
    nullable: true
  })
  prescriptions?: PrescriptionsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsListRelationFilter, {
    nullable: true
  })
  rdv_requests?: Rdv_requestsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RdvsListRelationFilter, {
    nullable: true
  })
  rdvs?: RdvsListRelationFilter | undefined;
}
