import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enumlab_requests_priority_enumNullableWithAggregatesFilter } from "../inputs/Enumlab_requests_priority_enumNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
import { UuidNullableWithAggregatesFilter } from "../inputs/UuidNullableWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";

@TypeGraphQL.InputType("Lab_requestsScalarWhereWithAggregatesInput", {})
export class Lab_requestsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Lab_requestsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Lab_requestsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Lab_requestsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Lab_requestsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  id?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  type?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => Enumlab_requests_priority_enumNullableWithAggregatesFilter, {
    nullable: true
  })
  priority?: Enumlab_requests_priority_enumNullableWithAggregatesFilter | undefined;

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
