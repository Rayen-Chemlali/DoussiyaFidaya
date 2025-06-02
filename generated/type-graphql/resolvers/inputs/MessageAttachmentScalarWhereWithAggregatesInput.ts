import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";

@TypeGraphQL.InputType("MessageAttachmentScalarWhereWithAggregatesInput", {})
export class MessageAttachmentScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MessageAttachmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MessageAttachmentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageAttachmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MessageAttachmentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageAttachmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MessageAttachmentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  id?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  filename?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  path?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  mimeType?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  size?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  messageId?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
