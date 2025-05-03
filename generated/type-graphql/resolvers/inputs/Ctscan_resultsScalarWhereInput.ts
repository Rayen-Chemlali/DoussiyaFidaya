import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { Enumctscan_results_result_type_enumFilter } from "../inputs/Enumctscan_results_result_type_enumFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UuidFilter } from "../inputs/UuidFilter";

@TypeGraphQL.InputType("Ctscan_resultsScalarWhereInput", {})
export class Ctscan_resultsScalarWhereInput {
  @TypeGraphQL.Field(_type => [Ctscan_resultsScalarWhereInput], {
    nullable: true
  })
  AND?: Ctscan_resultsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Ctscan_resultsScalarWhereInput], {
    nullable: true
  })
  OR?: Ctscan_resultsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Ctscan_resultsScalarWhereInput], {
    nullable: true
  })
  NOT?: Ctscan_resultsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  is_abnormal?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => Enumctscan_results_result_type_enumFilter, {
    nullable: true
  })
  result_type?: Enumctscan_results_result_type_enumFilter | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  lab_document_id?: UuidFilter | undefined;
}
