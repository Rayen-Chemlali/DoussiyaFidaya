import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutAttachmentsInput } from "../inputs/MessageCreateWithoutAttachmentsInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageCreateOrConnectWithoutAttachmentsInput", {})
export class MessageCreateOrConnectWithoutAttachmentsInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutAttachmentsInput, {
    nullable: false
  })
  create!: MessageCreateWithoutAttachmentsInput;
}
