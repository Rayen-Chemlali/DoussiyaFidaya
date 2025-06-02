import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { Enumlab_documents_status_enumWithAggregatesFilter } from "../inputs/Enumlab_documents_status_enumWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { UuidNullableWithAggregatesFilter } from "../inputs/UuidNullableWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";

@TypeGraphQL.InputType("Lab_documentsScalarWhereWithAggregatesInput", {})
export class Lab_documentsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Lab_documentsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Lab_documentsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Lab_documentsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_documentsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Lab_documentsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  id?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  completed_at?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  notes?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  requested_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => Enumlab_documents_status_enumWithAggregatesFilter, {
    nullable: true
  })
  status?: Enumlab_documents_status_enumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  section?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  patient_id?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableWithAggregatesFilter, {
    nullable: true
  })
  laboratory_id?: UuidNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableWithAggregatesFilter, {
    nullable: true
  })
  lab_request_id?: UuidNullableWithAggregatesFilter | undefined;
}
