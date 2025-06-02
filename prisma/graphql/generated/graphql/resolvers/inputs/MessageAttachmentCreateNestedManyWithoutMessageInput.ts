import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageAttachmentCreateManyMessageInputEnvelope } from "../inputs/MessageAttachmentCreateManyMessageInputEnvelope";
import { MessageAttachmentCreateOrConnectWithoutMessageInput } from "../inputs/MessageAttachmentCreateOrConnectWithoutMessageInput";
import { MessageAttachmentCreateWithoutMessageInput } from "../inputs/MessageAttachmentCreateWithoutMessageInput";
import { MessageAttachmentWhereUniqueInput } from "../inputs/MessageAttachmentWhereUniqueInput";

@TypeGraphQL.InputType("MessageAttachmentCreateNestedManyWithoutMessageInput", {})
export class MessageAttachmentCreateNestedManyWithoutMessageInput {
  @TypeGraphQL.Field(_type => [MessageAttachmentCreateWithoutMessageInput], {
    nullable: true
  })
  create?: MessageAttachmentCreateWithoutMessageInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageAttachmentCreateOrConnectWithoutMessageInput], {
    nullable: true
  })
  connectOrCreate?: MessageAttachmentCreateOrConnectWithoutMessageInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageAttachmentCreateManyMessageInputEnvelope, {
    nullable: true
  })
  createMany?: MessageAttachmentCreateManyMessageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MessageAttachmentWhereUniqueInput], {
    nullable: true
  })
  connect?: MessageAttachmentWhereUniqueInput[] | undefined;
}
