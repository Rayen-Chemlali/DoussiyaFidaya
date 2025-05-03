import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enumcliniques_type_enumWithAggregatesFilter } from "../inputs/Enumcliniques_type_enumWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";

@TypeGraphQL.InputType("CliniquesScalarWhereWithAggregatesInput", {})
export class CliniquesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CliniquesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CliniquesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CliniquesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CliniquesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CliniquesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CliniquesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  id?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => Enumcliniques_type_enumWithAggregatesFilter, {
    nullable: true
  })
  type?: Enumcliniques_type_enumWithAggregatesFilter | undefined;

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
