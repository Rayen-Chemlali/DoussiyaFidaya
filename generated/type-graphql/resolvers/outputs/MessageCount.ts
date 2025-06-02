import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCountAttachmentsArgs } from "./args/MessageCountAttachmentsArgs";

@TypeGraphQL.ObjectType("MessageCount", {})
export class MessageCount {
  attachments!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "attachments",
    nullable: false
  })
  getAttachments(@TypeGraphQL.Root() root: MessageCount, @TypeGraphQL.Args() args: MessageCountAttachmentsArgs): number {
    return root.attachments;
  }
}
