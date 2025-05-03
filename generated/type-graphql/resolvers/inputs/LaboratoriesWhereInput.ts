import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsListRelationFilter } from "../inputs/Lab_documentsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UuidFilter } from "../inputs/UuidFilter";

@TypeGraphQL.InputType("LaboratoriesWhereInput", {})
export class LaboratoriesWhereInput {
  @TypeGraphQL.Field(_type => [LaboratoriesWhereInput], {
    nullable: true
  })
  AND?: LaboratoriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaboratoriesWhereInput], {
    nullable: true
  })
  OR?: LaboratoriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaboratoriesWhereInput], {
    nullable: true
  })
  NOT?: LaboratoriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  address?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  phone?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  email?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsListRelationFilter, {
    nullable: true
  })
  lab_documents?: Lab_documentsListRelationFilter | undefined;
}
