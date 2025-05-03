import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Enumlab_documents_status_enumFilter } from "../inputs/Enumlab_documents_status_enumFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";

@TypeGraphQL.InputType("Lab_documentsScalarWhereInput", {})
export class Lab_documentsScalarWhereInput {
  @TypeGraphQL.Field(_type => [Lab_documentsScalarWhereInput], {
    nullable: true
  })
  AND?: Lab_documentsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsScalarWhereInput], {
    nullable: true
  })
  OR?: Lab_documentsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsScalarWhereInput], {
    nullable: true
  })
  NOT?: Lab_documentsScalarWhereInput[] | undefined;

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
}
