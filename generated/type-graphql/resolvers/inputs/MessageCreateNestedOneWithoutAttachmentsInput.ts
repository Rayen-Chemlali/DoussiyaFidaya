import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateOrConnectWithoutAttachmentsInput } from "../inputs/MessageCreateOrConnectWithoutAttachmentsInput";
import { MessageCreateWithoutAttachmentsInput } from "../inputs/MessageCreateWithoutAttachmentsInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageCreateNestedOneWithoutAttachmentsInput", {})
export class MessageCreateNestedOneWithoutAttachmentsInput {
  @TypeGraphQL.Field(_type => MessageCreateWithoutAttachmentsInput, {
    nullable: true
  })
  create?: MessageCreateWithoutAttachmentsInput | undefined;

  @TypeGraphQL.Field(_type => MessageCreateOrConnectWithoutAttachmentsInput, {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutAttachmentsInput | undefined;

  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: true
  })
  connect?: MessageWhereUniqueInput | undefined;
}
