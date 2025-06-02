import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageAttachmentCreateManyMessageInputEnvelope } from "../inputs/MessageAttachmentCreateManyMessageInputEnvelope";
import { MessageAttachmentCreateOrConnectWithoutMessageInput } from "../inputs/MessageAttachmentCreateOrConnectWithoutMessageInput";
import { MessageAttachmentCreateWithoutMessageInput } from "../inputs/MessageAttachmentCreateWithoutMessageInput";
import { MessageAttachmentScalarWhereInput } from "../inputs/MessageAttachmentScalarWhereInput";
import { MessageAttachmentUpdateManyWithWhereWithoutMessageInput } from "../inputs/MessageAttachmentUpdateManyWithWhereWithoutMessageInput";
import { MessageAttachmentUpdateWithWhereUniqueWithoutMessageInput } from "../inputs/MessageAttachmentUpdateWithWhereUniqueWithoutMessageInput";
import { MessageAttachmentUpsertWithWhereUniqueWithoutMessageInput } from "../inputs/MessageAttachmentUpsertWithWhereUniqueWithoutMessageInput";
import { MessageAttachmentWhereUniqueInput } from "../inputs/MessageAttachmentWhereUniqueInput";

@TypeGraphQL.InputType("MessageAttachmentUpdateManyWithoutMessageNestedInput", {})
export class MessageAttachmentUpdateManyWithoutMessageNestedInput {
  @TypeGraphQL.Field(_type => [MessageAttachmentCreateWithoutMessageInput], {
    nullable: true
  })
  create?: MessageAttachmentCreateWithoutMessageInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageAttachmentCreateOrConnectWithoutMessageInput], {
    nullable: true
  })
  connectOrCreate?: MessageAttachmentCreateOrConnectWithoutMessageInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageAttachmentUpsertWithWhereUniqueWithoutMessageInput], {
    nullable: true
  })
  upsert?: MessageAttachmentUpsertWithWhereUniqueWithoutMessageInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageAttachmentCreateManyMessageInputEnvelope, {
    nullable: true
  })
  createMany?: MessageAttachmentCreateManyMessageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MessageAttachmentWhereUniqueInput], {
    nullable: true
  })
  set?: MessageAttachmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageAttachmentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MessageAttachmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageAttachmentWhereUniqueInput], {
    nullable: true
  })
  delete?: MessageAttachmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageAttachmentWhereUniqueInput], {
    nullable: true
  })
  connect?: MessageAttachmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageAttachmentUpdateWithWhereUniqueWithoutMessageInput], {
    nullable: true
  })
  update?: MessageAttachmentUpdateWithWhereUniqueWithoutMessageInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageAttachmentUpdateManyWithWhereWithoutMessageInput], {
    nullable: true
  })
  updateMany?: MessageAttachmentUpdateManyWithWhereWithoutMessageInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageAttachmentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MessageAttachmentScalarWhereInput[] | undefined;
}
