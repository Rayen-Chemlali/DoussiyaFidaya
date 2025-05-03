import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enumcliniques_type_enumFilter } from "../inputs/Enumcliniques_type_enumFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UuidFilter } from "../inputs/UuidFilter";

@TypeGraphQL.InputType("CliniquesWhereInput", {})
export class CliniquesWhereInput {
  @TypeGraphQL.Field(_type => [CliniquesWhereInput], {
    nullable: true
  })
  AND?: CliniquesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CliniquesWhereInput], {
    nullable: true
  })
  OR?: CliniquesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CliniquesWhereInput], {
    nullable: true
  })
  NOT?: CliniquesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => Enumcliniques_type_enumFilter, {
    nullable: true
  })
  type?: Enumcliniques_type_enumFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

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
}
