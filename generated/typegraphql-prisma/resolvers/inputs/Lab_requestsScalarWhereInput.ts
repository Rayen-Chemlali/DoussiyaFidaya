import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enumlab_requests_priority_enumNullableFilter } from "../inputs/Enumlab_requests_priority_enumNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";

@TypeGraphQL.InputType("Lab_requestsScalarWhereInput", {})
export class Lab_requestsScalarWhereInput {
  @TypeGraphQL.Field(_type => [Lab_requestsScalarWhereInput], {
    nullable: true
  })
  AND?: Lab_requestsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsScalarWhereInput], {
    nullable: true
  })
  OR?: Lab_requestsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsScalarWhereInput], {
    nullable: true
  })
  NOT?: Lab_requestsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => Enumlab_requests_priority_enumNullableFilter, {
    nullable: true
  })
  priority?: Enumlab_requests_priority_enumNullableFilter | undefined;

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
}
