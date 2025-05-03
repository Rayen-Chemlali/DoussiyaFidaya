import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enumauthorizations_level_enumFilter } from "../inputs/Enumauthorizations_level_enumFilter";
import { Instituts_medicauxNullableRelationFilter } from "../inputs/Instituts_medicauxNullableRelationFilter";
import { PatientsRelationFilter } from "../inputs/PatientsRelationFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";

@TypeGraphQL.InputType("AuthorizationsWhereInput", {})
export class AuthorizationsWhereInput {
  @TypeGraphQL.Field(_type => [AuthorizationsWhereInput], {
    nullable: true
  })
  AND?: AuthorizationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsWhereInput], {
    nullable: true
  })
  OR?: AuthorizationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsWhereInput], {
    nullable: true
  })
  NOT?: AuthorizationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => Enumauthorizations_level_enumFilter, {
    nullable: true
  })
  level?: Enumauthorizations_level_enumFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableFilter, {
    nullable: true
  })
  institut_medical_id?: UuidNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  patient_id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxNullableRelationFilter, {
    nullable: true
  })
  instituts_medicaux?: Instituts_medicauxNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PatientsRelationFilter, {
    nullable: true
  })
  patients?: PatientsRelationFilter | undefined;
}
