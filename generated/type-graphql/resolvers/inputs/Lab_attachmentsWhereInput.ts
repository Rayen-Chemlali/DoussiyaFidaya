import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsRelationFilter } from "../inputs/Lab_documentsRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UuidFilter } from "../inputs/UuidFilter";

@TypeGraphQL.InputType("Lab_attachmentsWhereInput", {})
export class Lab_attachmentsWhereInput {
  @TypeGraphQL.Field(_type => [Lab_attachmentsWhereInput], {
    nullable: true
  })
  AND?: Lab_attachmentsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_attachmentsWhereInput], {
    nullable: true
  })
  OR?: Lab_attachmentsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_attachmentsWhereInput], {
    nullable: true
  })
  NOT?: Lab_attachmentsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  url?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  lab_document_id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsRelationFilter, {
    nullable: true
  })
  lab_documents?: Lab_documentsRelationFilter | undefined;
}
