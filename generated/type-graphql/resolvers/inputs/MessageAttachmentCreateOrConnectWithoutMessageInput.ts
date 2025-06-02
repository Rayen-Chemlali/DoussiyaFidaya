import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageAttachmentCreateWithoutMessageInput } from "../inputs/MessageAttachmentCreateWithoutMessageInput";
import { MessageAttachmentWhereUniqueInput } from "../inputs/MessageAttachmentWhereUniqueInput";

@TypeGraphQL.InputType("MessageAttachmentCreateOrConnectWithoutMessageInput", {})
export class MessageAttachmentCreateOrConnectWithoutMessageInput {
  @TypeGraphQL.Field(_type => MessageAttachmentWhereUniqueInput, {
    nullable: false
  })
  where!: MessageAttachmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageAttachmentCreateWithoutMessageInput, {
    nullable: false
  })
  create!: MessageAttachmentCreateWithoutMessageInput;
}
