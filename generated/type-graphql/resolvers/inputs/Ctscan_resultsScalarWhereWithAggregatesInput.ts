import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { Enumctscan_results_result_type_enumWithAggregatesFilter } from "../inputs/Enumctscan_results_result_type_enumWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";

@TypeGraphQL.InputType("Ctscan_resultsScalarWhereWithAggregatesInput", {})
export class Ctscan_resultsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Ctscan_resultsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Ctscan_resultsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Ctscan_resultsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Ctscan_resultsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Ctscan_resultsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Ctscan_resultsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  id?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  is_abnormal?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  description?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => Enumctscan_results_result_type_enumWithAggregatesFilter, {
    nullable: true
  })
  result_type?: Enumctscan_results_result_type_enumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  lab_document_id?: UuidWithAggregatesFilter | undefined;
}
