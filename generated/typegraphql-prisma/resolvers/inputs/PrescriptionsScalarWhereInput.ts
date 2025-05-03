import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { Enumprescriptions_status_enumFilter } from "../inputs/Enumprescriptions_status_enumFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";

@TypeGraphQL.InputType("PrescriptionsScalarWhereInput", {})
export class PrescriptionsScalarWhereInput {
  @TypeGraphQL.Field(_type => [PrescriptionsScalarWhereInput], {
    nullable: true
  })
  AND?: PrescriptionsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsScalarWhereInput], {
    nullable: true
  })
  OR?: PrescriptionsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsScalarWhereInput], {
    nullable: true
  })
  NOT?: PrescriptionsScalarWhereInput[] | undefined;

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
}
