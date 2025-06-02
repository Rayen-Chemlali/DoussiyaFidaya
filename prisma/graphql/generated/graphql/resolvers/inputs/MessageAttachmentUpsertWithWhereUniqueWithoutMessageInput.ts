import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageAttachmentCreateWithoutMessageInput } from "../inputs/MessageAttachmentCreateWithoutMessageInput";
import { MessageAttachmentUpdateWithoutMessageInput } from "../inputs/MessageAttachmentUpdateWithoutMessageInput";
import { MessageAttachmentWhereUniqueInput } from "../inputs/MessageAttachmentWhereUniqueInput";

@TypeGraphQL.InputType("MessageAttachmentUpsertWithWhereUniqueWithoutMessageInput", {})
export class MessageAttachmentUpsertWithWhereUniqueWithoutMessageInput {
  @TypeGraphQL.Field(_type => MessageAttachmentWhereUniqueInput, {
    nullable: false
  })
  where!: MessageAttachmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageAttachmentUpdateWithoutMessageInput, {
    nullable: false
  })
  update!: MessageAttachmentUpdateWithoutMessageInput;

  @TypeGraphQL.Field(_type => MessageAttachmentCreateWithoutMessageInput, {
    nullable: false
  })
  create!: MessageAttachmentCreateWithoutMessageInput;
}
