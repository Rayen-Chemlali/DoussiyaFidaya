import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageAttachmentUpdateWithoutMessageInput } from "../inputs/MessageAttachmentUpdateWithoutMessageInput";
import { MessageAttachmentWhereUniqueInput } from "../inputs/MessageAttachmentWhereUniqueInput";

@TypeGraphQL.InputType("MessageAttachmentUpdateWithWhereUniqueWithoutMessageInput", {})
export class MessageAttachmentUpdateWithWhereUniqueWithoutMessageInput {
  @TypeGraphQL.Field(_type => MessageAttachmentWhereUniqueInput, {
    nullable: false
  })
  where!: MessageAttachmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageAttachmentUpdateWithoutMessageInput, {
    nullable: false
  })
  data!: MessageAttachmentUpdateWithoutMessageInput;
}
