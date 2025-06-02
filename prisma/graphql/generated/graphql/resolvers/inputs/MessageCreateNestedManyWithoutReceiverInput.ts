import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManyReceiverInputEnvelope } from "../inputs/MessageCreateManyReceiverInputEnvelope";
import { MessageCreateOrConnectWithoutReceiverInput } from "../inputs/MessageCreateOrConnectWithoutReceiverInput";
import { MessageCreateWithoutReceiverInput } from "../inputs/MessageCreateWithoutReceiverInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageCreateNestedManyWithoutReceiverInput", {})
export class MessageCreateNestedManyWithoutReceiverInput {
  @TypeGraphQL.Field(_type => [MessageCreateWithoutReceiverInput], {
    nullable: true
  })
  create?: MessageCreateWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutReceiverInput], {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageCreateManyReceiverInputEnvelope, {
    nullable: true
  })
  createMany?: MessageCreateManyReceiverInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  connect?: MessageWhereUniqueInput[] | undefined;
}
