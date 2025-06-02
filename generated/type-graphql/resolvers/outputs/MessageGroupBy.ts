import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCountAggregate } from "../outputs/MessageCountAggregate";
import { MessageMaxAggregate } from "../outputs/MessageMaxAggregate";
import { MessageMinAggregate } from "../outputs/MessageMinAggregate";

@TypeGraphQL.ObjectType("MessageGroupBy", {})
export class MessageGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  senderId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  receiverId!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isRead!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  patientId!: string | null;

  @TypeGraphQL.Field(_type => MessageCountAggregate, {
    nullable: true
  })
  _count!: MessageCountAggregate | null;

  @TypeGraphQL.Field(_type => MessageMinAggregate, {
    nullable: true
  })
  _min!: MessageMinAggregate | null;

  @TypeGraphQL.Field(_type => MessageMaxAggregate, {
    nullable: true
  })
  _max!: MessageMaxAggregate | null;
}
