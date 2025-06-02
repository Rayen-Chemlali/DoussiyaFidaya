import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MessageRelationFilter } from "../inputs/MessageRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UuidFilter } from "../inputs/UuidFilter";

@TypeGraphQL.InputType("MessageAttachmentWhereInput", {})
export class MessageAttachmentWhereInput {
  @TypeGraphQL.Field(_type => [MessageAttachmentWhereInput], {
    nullable: true
  })
  AND?: MessageAttachmentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageAttachmentWhereInput], {
    nullable: true
  })
  OR?: MessageAttachmentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageAttachmentWhereInput], {
    nullable: true
  })
  NOT?: MessageAttachmentWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => MessageRelationFilter, {
    nullable: true
  })
  message?: MessageRelationFilter | undefined;
}
