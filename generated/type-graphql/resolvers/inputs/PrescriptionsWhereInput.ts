import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { ConsultationsNullableRelationFilter } from "../inputs/ConsultationsNullableRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DoctorsNullableRelationFilter } from "../inputs/DoctorsNullableRelationFilter";
import { Enumprescriptions_status_enumFilter } from "../inputs/Enumprescriptions_status_enumFilter";
import { MedicationsListRelationFilter } from "../inputs/MedicationsListRelationFilter";
import { PatientsRelationFilter } from "../inputs/PatientsRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";

@TypeGraphQL.InputType("PrescriptionsWhereInput", {})
export class PrescriptionsWhereInput {
  @TypeGraphQL.Field(_type => [PrescriptionsWhereInput], {
    nullable: true
  })
  AND?: PrescriptionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsWhereInput], {
    nullable: true
  })
  OR?: PrescriptionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsWhereInput], {
    nullable: true
  })
  NOT?: PrescriptionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  instructions?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  is_signed?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  section?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Enumprescriptions_status_enumFilter, {
    nullable: true
  })
  status?: Enumprescriptions_status_enumFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updated_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableFilter, {
    nullable: true
  })
  doctor_id?: UuidNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  patient_id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => ConsultationsNullableRelationFilter, {
    nullable: true
  })
  consultations?: ConsultationsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MedicationsListRelationFilter, {
    nullable: true
  })
  medications?: MedicationsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DoctorsNullableRelationFilter, {
    nullable: true
  })
  doctors?: DoctorsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PatientsRelationFilter, {
    nullable: true
  })
  patients?: PatientsRelationFilter | undefined;
}
