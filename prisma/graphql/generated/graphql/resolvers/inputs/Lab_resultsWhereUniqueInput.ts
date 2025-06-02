import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { Enumlab_results_result_type_enumFilter } from "../inputs/Enumlab_results_result_type_enumFilter";
import { Lab_documentsRelationFilter } from "../inputs/Lab_documentsRelationFilter";
import { Lab_resultsWhereInput } from "../inputs/Lab_resultsWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UuidFilter } from "../inputs/UuidFilter";

@TypeGraphQL.InputType("Lab_resultsWhereUniqueInput", {})
export class Lab_resultsWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => [Lab_resultsWhereInput], {
    nullable: true
  })
  AND?: Lab_resultsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_resultsWhereInput], {
    nullable: true
  })
  OR?: Lab_resultsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_resultsWhereInput], {
    nullable: true
  })
  NOT?: Lab_resultsWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => Enumlab_results_result_type_enumFilter, {
    nullable: true
  })
  result_type?: Enumlab_results_result_type_enumFilter | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  lab_document_id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsRelationFilter, {
    nullable: true
  })
  lab_documents?: Lab_documentsRelationFilter | undefined;
}
