import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageUpdateWithoutReceiverInput } from "../inputs/MessageUpdateWithoutReceiverInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpdateWithWhereUniqueWithoutReceiverInput", {})
export class MessageUpdateWithWhereUniqueWithoutReceiverInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageUpdateWithoutReceiverInput, {
    nullable: false
  })
  data!: MessageUpdateWithoutReceiverInput;
}
