import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsListRelationFilter } from "../inputs/Lab_documentsListRelationFilter";
import { LaboratoriesWhereInput } from "../inputs/LaboratoriesWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("LaboratoriesWhereUniqueInput", {})
export class LaboratoriesWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

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
