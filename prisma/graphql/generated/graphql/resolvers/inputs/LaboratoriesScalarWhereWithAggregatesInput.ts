import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";

@TypeGraphQL.InputType("LaboratoriesScalarWhereWithAggregatesInput", {})
export class LaboratoriesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [LaboratoriesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: LaboratoriesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaboratoriesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: LaboratoriesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaboratoriesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: LaboratoriesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  id?: UuidWithAggregatesFilter | undefined;

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

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}
