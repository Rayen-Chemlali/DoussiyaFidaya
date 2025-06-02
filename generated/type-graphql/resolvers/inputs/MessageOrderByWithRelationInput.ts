import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsOrderByWithRelationInput } from "../inputs/DoctorsOrderByWithRelationInput";
import { MessageAttachmentOrderByRelationAggregateInput } from "../inputs/MessageAttachmentOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MessageOrderByWithRelationInput", {})
export class MessageOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => DoctorsOrderByWithRelationInput, {
    nullable: true
  })
  sender?: DoctorsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsOrderByWithRelationInput, {
    nullable: true
  })
  receiver?: DoctorsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MessageAttachmentOrderByRelationAggregateInput, {
    nullable: true
  })
  attachments?: MessageAttachmentOrderByRelationAggregateInput | undefined;
}
