import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";

@TypeGraphQL.InputType("Lab_attachmentsScalarWhereWithAggregatesInput", {})
export class Lab_attachmentsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Lab_attachmentsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Lab_attachmentsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_attachmentsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Lab_attachmentsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_attachmentsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Lab_attachmentsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  id?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  type?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  url?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  lab_document_id?: UuidWithAggregatesFilter | undefined;
}
