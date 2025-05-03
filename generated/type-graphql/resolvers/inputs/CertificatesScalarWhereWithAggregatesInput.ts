import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
import { UuidNullableWithAggregatesFilter } from "../inputs/UuidNullableWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";

@TypeGraphQL.InputType("CertificatesScalarWhereWithAggregatesInput", {})
export class CertificatesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CertificatesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CertificatesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CertificatesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CertificatesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CertificatesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CertificatesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  id?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  type?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  start_date?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  end_date?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  description?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableWithAggregatesFilter, {
    nullable: true
  })
  doctor_id?: UuidNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  patient_id?: UuidWithAggregatesFilter | undefined;
}
