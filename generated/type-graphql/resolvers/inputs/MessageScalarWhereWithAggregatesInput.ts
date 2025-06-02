import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
import { UuidNullableWithAggregatesFilter } from "../inputs/UuidNullableWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";

@TypeGraphQL.InputType("MessageScalarWhereWithAggregatesInput", {})
export class MessageScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MessageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MessageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MessageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MessageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  id?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  content?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  senderId?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  receiverId?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  isRead?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableWithAggregatesFilter, {
    nullable: true
  })
  patientId?: UuidNullableWithAggregatesFilter | undefined;
}
