import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UuidFilter } from "../inputs/UuidFilter";

@TypeGraphQL.InputType("MessageAttachmentScalarWhereInput", {})
export class MessageAttachmentScalarWhereInput {
  @TypeGraphQL.Field(_type => [MessageAttachmentScalarWhereInput], {
    nullable: true
  })
  AND?: MessageAttachmentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageAttachmentScalarWhereInput], {
    nullable: true
  })
  OR?: MessageAttachmentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageAttachmentScalarWhereInput], {
    nullable: true
  })
  NOT?: MessageAttachmentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  filename?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  path?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  mimeType?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  size?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  messageId?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
