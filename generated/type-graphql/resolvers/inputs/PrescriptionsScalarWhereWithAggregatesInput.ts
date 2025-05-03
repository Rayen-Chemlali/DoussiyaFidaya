import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { Enumprescriptions_status_enumWithAggregatesFilter } from "../inputs/Enumprescriptions_status_enumWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { UuidNullableWithAggregatesFilter } from "../inputs/UuidNullableWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";

@TypeGraphQL.InputType("PrescriptionsScalarWhereWithAggregatesInput", {})
export class PrescriptionsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PrescriptionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PrescriptionsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PrescriptionsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PrescriptionsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  id?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  date?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  instructions?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  is_signed?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  section?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => Enumprescriptions_status_enumWithAggregatesFilter, {
    nullable: true
  })
  status?: Enumprescriptions_status_enumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableWithAggregatesFilter, {
    nullable: true
  })
  doctor_id?: UuidNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  patient_id?: UuidWithAggregatesFilter | undefined;
}
