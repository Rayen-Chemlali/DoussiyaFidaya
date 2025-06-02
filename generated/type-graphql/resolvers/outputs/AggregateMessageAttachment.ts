import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageAttachmentAvgAggregate } from "../outputs/MessageAttachmentAvgAggregate";
import { MessageAttachmentCountAggregate } from "../outputs/MessageAttachmentCountAggregate";
import { MessageAttachmentMaxAggregate } from "../outputs/MessageAttachmentMaxAggregate";
import { MessageAttachmentMinAggregate } from "../outputs/MessageAttachmentMinAggregate";
import { MessageAttachmentSumAggregate } from "../outputs/MessageAttachmentSumAggregate";

@TypeGraphQL.ObjectType("AggregateMessageAttachment", {})
export class AggregateMessageAttachment {
  @TypeGraphQL.Field(_type => MessageAttachmentCountAggregate, {
    nullable: true
  })
  _count!: MessageAttachmentCountAggregate | null;

  @TypeGraphQL.Field(_type => MessageAttachmentAvgAggregate, {
    nullable: true
  })
  _avg!: MessageAttachmentAvgAggregate | null;

  @TypeGraphQL.Field(_type => MessageAttachmentSumAggregate, {
    nullable: true
  })
  _sum!: MessageAttachmentSumAggregate | null;

  @TypeGraphQL.Field(_type => MessageAttachmentMinAggregate, {
    nullable: true
  })
  _min!: MessageAttachmentMinAggregate | null;

  @TypeGraphQL.Field(_type => MessageAttachmentMaxAggregate, {
    nullable: true
  })
  _max!: MessageAttachmentMaxAggregate | null;
}
