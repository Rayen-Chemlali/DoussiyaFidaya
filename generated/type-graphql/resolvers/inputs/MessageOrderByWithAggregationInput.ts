import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCountOrderByAggregateInput } from "../inputs/MessageCountOrderByAggregateInput";
import { MessageMaxOrderByAggregateInput } from "../inputs/MessageMaxOrderByAggregateInput";
import { MessageMinOrderByAggregateInput } from "../inputs/MessageMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MessageOrderByWithAggregationInput", {})
export class MessageOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  senderId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  receiverId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isRead?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  patientId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => MessageCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MessageCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MessageMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MessageMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MessageMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MessageMinOrderByAggregateInput | undefined;
}
