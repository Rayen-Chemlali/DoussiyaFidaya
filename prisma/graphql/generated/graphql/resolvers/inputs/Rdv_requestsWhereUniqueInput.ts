import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DoctorsNullableRelationFilter } from "../inputs/DoctorsNullableRelationFilter";
import { PatientsRelationFilter } from "../inputs/PatientsRelationFilter";
import { Rdv_requestsWhereInput } from "../inputs/Rdv_requestsWhereInput";
import { RdvsNullableRelationFilter } from "../inputs/RdvsNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";

@TypeGraphQL.InputType("Rdv_requestsWhereUniqueInput", {})
export class Rdv_requestsWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rdv_id?: string | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsWhereInput], {
    nullable: true
  })
  AND?: Rdv_requestsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsWhereInput], {
    nullable: true
  })
  OR?: Rdv_requestsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsWhereInput], {
    nullable: true
  })
  NOT?: Rdv_requestsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  time?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Motif?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Status?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  patient_id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableFilter, {
    nullable: true
  })
  doctor_id?: UuidNullableFilter | undefined;

  @TypeGraphQL.Field(_type => RdvsNullableRelationFilter, {
    nullable: true
  })
  rdvs_rdv_requests_rdv_idTordvs?: RdvsNullableRelationFilter | undefined;

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
  rdvs_rdvs_rdv_request_idTordv_requests?: RdvsNullableRelationFilter | undefined;
}
