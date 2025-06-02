import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { CertificatesListRelationFilter } from "../inputs/CertificatesListRelationFilter";
import { ConsultationsListRelationFilter } from "../inputs/ConsultationsListRelationFilter";
import { Doctor_institutsListRelationFilter } from "../inputs/Doctor_institutsListRelationFilter";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";
import { Enumdoctors_specialty_enumFilter } from "../inputs/Enumdoctors_specialty_enumFilter";
import { Enumdoctors_type_enumFilter } from "../inputs/Enumdoctors_type_enumFilter";
import { Instituts_medicauxListRelationFilter } from "../inputs/Instituts_medicauxListRelationFilter";
import { Lab_requestsListRelationFilter } from "../inputs/Lab_requestsListRelationFilter";
import { MessageListRelationFilter } from "../inputs/MessageListRelationFilter";
import { PrescriptionsListRelationFilter } from "../inputs/PrescriptionsListRelationFilter";
import { Rdv_requestsListRelationFilter } from "../inputs/Rdv_requestsListRelationFilter";
import { RdvsListRelationFilter } from "../inputs/RdvsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { UsersRelationFilter } from "../inputs/UsersRelationFilter";

@TypeGraphQL.InputType("DoctorsWhereUniqueInput", {})
export class DoctorsWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_id?: string | undefined;

  @TypeGraphQL.Field(_type => [DoctorsWhereInput], {
    nullable: true
  })
  AND?: DoctorsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsWhereInput], {
    nullable: true
  })
  OR?: DoctorsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsWhereInput], {
    nullable: true
  })
  NOT?: DoctorsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => Enumdoctors_type_enumFilter, {
    nullable: true
  })
  type?: Enumdoctors_type_enumFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  is_license_verified?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  bio?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  education?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  experience?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  first_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  languages?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  last_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  profile_image?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Enumdoctors_specialty_enumFilter, {
    nullable: true
  })
  specialty?: Enumdoctors_specialty_enumFilter | undefined;

  @TypeGraphQL.Field(_type => CertificatesListRelationFilter, {
    nullable: true
  })
  certificates?: CertificatesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ConsultationsListRelationFilter, {
    nullable: true
  })
  consultations?: ConsultationsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Doctor_institutsListRelationFilter, {
    nullable: true
  })
  doctor_instituts?: Doctor_institutsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UsersRelationFilter, {
    nullable: true
  })
  users?: UsersRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsListRelationFilter, {
    nullable: true
  })
  lab_requests?: Lab_requestsListRelationFilter | undefined;

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

  @TypeGraphQL.Field(_type => MessageListRelationFilter, {
    nullable: true
  })
  sentMessages?: MessageListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MessageListRelationFilter, {
    nullable: true
  })
  receivedMessages?: MessageListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxListRelationFilter, {
    nullable: true
  })
  instituts?: Instituts_medicauxListRelationFilter | undefined;
}
