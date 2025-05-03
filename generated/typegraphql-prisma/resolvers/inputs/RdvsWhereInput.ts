import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsNullableRelationFilter } from "../inputs/ConsultationsNullableRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DoctorsNullableRelationFilter } from "../inputs/DoctorsNullableRelationFilter";
import { PatientsRelationFilter } from "../inputs/PatientsRelationFilter";
import { Rdv_requestsNullableRelationFilter } from "../inputs/Rdv_requestsNullableRelationFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";

@TypeGraphQL.InputType("RdvsWhereInput", {})
export class RdvsWhereInput {
  @TypeGraphQL.Field(_type => [RdvsWhereInput], {
    nullable: true
  })
  AND?: RdvsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RdvsWhereInput], {
    nullable: true
  })
  OR?: RdvsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RdvsWhereInput], {
    nullable: true
  })
  NOT?: RdvsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  time?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  patient_id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableFilter, {
    nullable: true
  })
  doctor_id?: UuidNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableFilter, {
    nullable: true
  })
  consultation_id?: UuidNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableFilter, {
    nullable: true
  })
  rdv_request_id?: UuidNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsNullableRelationFilter, {
    nullable: true
  })
  rdv_requests_rdv_requests_rdv_idTordvs?: Rdv_requestsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ConsultationsNullableRelationFilter, {
    nullable: true
  })
  consultations?: ConsultationsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PatientsRelationFilter, {
    nullable: true
  })
  patients?: PatientsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsNullableRelationFilter, {
    nullable: true
  })
  rdv_requests_rdvs_rdv_request_idTordv_requests?: Rdv_requestsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DoctorsNullableRelationFilter, {
    nullable: true
  })
  doctors?: DoctorsNullableRelationFilter | undefined;
}
