import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageAttachmentAvgOrderByAggregateInput } from "../inputs/MessageAttachmentAvgOrderByAggregateInput";
import { MessageAttachmentCountOrderByAggregateInput } from "../inputs/MessageAttachmentCountOrderByAggregateInput";
import { MessageAttachmentMaxOrderByAggregateInput } from "../inputs/MessageAttachmentMaxOrderByAggregateInput";
import { MessageAttachmentMinOrderByAggregateInput } from "../inputs/MessageAttachmentMinOrderByAggregateInput";
import { MessageAttachmentSumOrderByAggregateInput } from "../inputs/MessageAttachmentSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MessageAttachmentOrderByWithAggregationInput", {})
export class MessageAttachmentOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  filename?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  path?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mimeType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  size?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  messageId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MessageAttachmentCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MessageAttachmentCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MessageAttachmentAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MessageAttachmentAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MessageAttachmentMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MessageAttachmentMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MessageAttachmentMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MessageAttachmentMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MessageAttachmentSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MessageAttachmentSumOrderByAggregateInput | undefined;
}
