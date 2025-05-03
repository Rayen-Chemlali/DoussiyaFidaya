import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { UuidFilter } from "../inputs/UuidFilter";

@TypeGraphQL.InputType("Lab_attachmentsScalarWhereInput", {})
export class Lab_attachmentsScalarWhereInput {
  @TypeGraphQL.Field(_type => [Lab_attachmentsScalarWhereInput], {
    nullable: true
  })
  AND?: Lab_attachmentsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_attachmentsScalarWhereInput], {
    nullable: true
  })
  OR?: Lab_attachmentsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_attachmentsScalarWhereInput], {
    nullable: true
  })
  NOT?: Lab_attachmentsScalarWhereInput[] | undefined;

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
}
