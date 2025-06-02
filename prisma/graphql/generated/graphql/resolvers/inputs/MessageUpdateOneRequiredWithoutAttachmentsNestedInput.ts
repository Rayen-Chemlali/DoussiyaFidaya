import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateOrConnectWithoutAttachmentsInput } from "../inputs/MessageCreateOrConnectWithoutAttachmentsInput";
import { MessageCreateWithoutAttachmentsInput } from "../inputs/MessageCreateWithoutAttachmentsInput";
import { MessageUpdateToOneWithWhereWithoutAttachmentsInput } from "../inputs/MessageUpdateToOneWithWhereWithoutAttachmentsInput";
import { MessageUpsertWithoutAttachmentsInput } from "../inputs/MessageUpsertWithoutAttachmentsInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpdateOneRequiredWithoutAttachmentsNestedInput", {})
export class MessageUpdateOneRequiredWithoutAttachmentsNestedInput {
  @TypeGraphQL.Field(_type => MessageCreateWithoutAttachmentsInput, {
    nullable: true
  })
  create?: MessageCreateWithoutAttachmentsInput | undefined;

  @TypeGraphQL.Field(_type => MessageCreateOrConnectWithoutAttachmentsInput, {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutAttachmentsInput | undefined;

  @TypeGraphQL.Field(_type => MessageUpsertWithoutAttachmentsInput, {
    nullable: true
  })
  upsert?: MessageUpsertWithoutAttachmentsInput | undefined;

  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: true
  })
  connect?: MessageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MessageUpdateToOneWithWhereWithoutAttachmentsInput, {
    nullable: true
  })
  update?: MessageUpdateToOneWithWhereWithoutAttachmentsInput | undefined;
}
