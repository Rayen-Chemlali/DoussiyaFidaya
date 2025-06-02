import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutAttachmentsInput } from "../inputs/MessageCreateWithoutAttachmentsInput";
import { MessageUpdateWithoutAttachmentsInput } from "../inputs/MessageUpdateWithoutAttachmentsInput";
import { MessageWhereInput } from "../inputs/MessageWhereInput";

@TypeGraphQL.InputType("MessageUpsertWithoutAttachmentsInput", {})
export class MessageUpsertWithoutAttachmentsInput {
  @TypeGraphQL.Field(_type => MessageUpdateWithoutAttachmentsInput, {
    nullable: false
  })
  update!: MessageUpdateWithoutAttachmentsInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutAttachmentsInput, {
    nullable: false
  })
  create!: MessageCreateWithoutAttachmentsInput;

  @TypeGraphQL.Field(_type => MessageWhereInput, {
    nullable: true
  })
  where?: MessageWhereInput | undefined;
}
