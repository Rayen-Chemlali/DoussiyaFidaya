import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enumhopitaux_type_enumWithAggregatesFilter } from "../inputs/Enumhopitaux_type_enumWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";

@TypeGraphQL.InputType("HopitauxScalarWhereWithAggregatesInput", {})
export class HopitauxScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [HopitauxScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: HopitauxScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [HopitauxScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: HopitauxScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [HopitauxScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: HopitauxScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  id?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => Enumhopitaux_type_enumWithAggregatesFilter, {
    nullable: true
  })
  type?: Enumhopitaux_type_enumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  address?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  phone?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  email?: StringNullableWithAggregatesFilter | undefined;
}
