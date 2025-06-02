import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DoctorsRelationFilter } from "../inputs/DoctorsRelationFilter";
import { MessageAttachmentListRelationFilter } from "../inputs/MessageAttachmentListRelationFilter";
import { MessageWhereInput } from "../inputs/MessageWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";

@TypeGraphQL.InputType("MessageWhereUniqueInput", {})
export class MessageWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereInput], {
    nullable: true
  })
  AND?: MessageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereInput], {
    nullable: true
  })
  OR?: MessageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereInput], {
    nullable: true
  })
  NOT?: MessageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  content?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  senderId?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  receiverId?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isRead?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableFilter, {
    nullable: true
  })
  patientId?: UuidNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DoctorsRelationFilter, {
    nullable: true
  })
  sender?: DoctorsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DoctorsRelationFilter, {
    nullable: true
  })
  receiver?: DoctorsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MessageAttachmentListRelationFilter, {
    nullable: true
  })
  attachments?: MessageAttachmentListRelationFilter | undefined;
}
