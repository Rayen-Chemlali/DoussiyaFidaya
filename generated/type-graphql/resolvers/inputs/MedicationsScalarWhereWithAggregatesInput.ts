import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";

@TypeGraphQL.InputType("MedicationsScalarWhereWithAggregatesInput", {})
export class MedicationsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MedicationsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MedicationsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MedicationsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MedicationsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MedicationsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MedicationsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  id?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  dosage?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  duration?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  frequency?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  quantity?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  prescription_id?: UuidWithAggregatesFilter | undefined;
}
