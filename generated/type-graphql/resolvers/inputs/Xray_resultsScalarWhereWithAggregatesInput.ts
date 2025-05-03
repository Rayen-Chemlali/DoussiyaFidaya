import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { Enumxray_results_result_type_enumWithAggregatesFilter } from "../inputs/Enumxray_results_result_type_enumWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";

@TypeGraphQL.InputType("Xray_resultsScalarWhereWithAggregatesInput", {})
export class Xray_resultsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Xray_resultsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Xray_resultsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Xray_resultsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Xray_resultsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Xray_resultsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Xray_resultsScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => Enumxray_results_result_type_enumWithAggregatesFilter, {
    nullable: true
  })
  result_type?: Enumxray_results_result_type_enumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  lab_document_id?: UuidWithAggregatesFilter | undefined;
}
