import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutReceiverInput } from "../inputs/MessageCreateWithoutReceiverInput";
import { MessageUpdateWithoutReceiverInput } from "../inputs/MessageUpdateWithoutReceiverInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpsertWithWhereUniqueWithoutReceiverInput", {})
export class MessageUpsertWithWhereUniqueWithoutReceiverInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageUpdateWithoutReceiverInput, {
    nullable: false
  })
  update!: MessageUpdateWithoutReceiverInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutReceiverInput, {
    nullable: false
  })
  create!: MessageCreateWithoutReceiverInput;
}
