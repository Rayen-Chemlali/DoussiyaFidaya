import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enumhopitaux_type_enumFilter } from "../inputs/Enumhopitaux_type_enumFilter";
import { HopitauxWhereInput } from "../inputs/HopitauxWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("HopitauxWhereUniqueInput", {})
export class HopitauxWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => [HopitauxWhereInput], {
    nullable: true
  })
  AND?: HopitauxWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [HopitauxWhereInput], {
    nullable: true
  })
  OR?: HopitauxWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [HopitauxWhereInput], {
    nullable: true
  })
  NOT?: HopitauxWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => Enumhopitaux_type_enumFilter, {
    nullable: true
  })
  type?: Enumhopitaux_type_enumFilter | undefined;

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
