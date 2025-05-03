import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CertificatesWhereInput } from "../inputs/CertificatesWhereInput";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { DoctorsNullableRelationFilter } from "../inputs/DoctorsNullableRelationFilter";
import { PatientsRelationFilter } from "../inputs/PatientsRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";

@TypeGraphQL.InputType("CertificatesWhereUniqueInput", {})
export class CertificatesWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => [CertificatesWhereInput], {
    nullable: true
  })
  AND?: CertificatesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CertificatesWhereInput], {
    nullable: true
  })
  OR?: CertificatesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CertificatesWhereInput], {
    nullable: true
  })
  NOT?: CertificatesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  start_date?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  end_date?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableFilter, {
    nullable: true
  })
  doctor_id?: UuidNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  patient_id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => DoctorsNullableRelationFilter, {
    nullable: true
  })
  doctors?: DoctorsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PatientsRelationFilter, {
    nullable: true
  })
  patients?: PatientsRelationFilter | undefined;
}
