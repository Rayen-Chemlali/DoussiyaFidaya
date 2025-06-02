import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManyReceiverInputEnvelope } from "../inputs/MessageCreateManyReceiverInputEnvelope";
import { MessageCreateOrConnectWithoutReceiverInput } from "../inputs/MessageCreateOrConnectWithoutReceiverInput";
import { MessageCreateWithoutReceiverInput } from "../inputs/MessageCreateWithoutReceiverInput";
import { MessageScalarWhereInput } from "../inputs/MessageScalarWhereInput";
import { MessageUpdateManyWithWhereWithoutReceiverInput } from "../inputs/MessageUpdateManyWithWhereWithoutReceiverInput";
import { MessageUpdateWithWhereUniqueWithoutReceiverInput } from "../inputs/MessageUpdateWithWhereUniqueWithoutReceiverInput";
import { MessageUpsertWithWhereUniqueWithoutReceiverInput } from "../inputs/MessageUpsertWithWhereUniqueWithoutReceiverInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpdateManyWithoutReceiverNestedInput", {})
export class MessageUpdateManyWithoutReceiverNestedInput {
  @TypeGraphQL.Field(_type => [MessageCreateWithoutReceiverInput], {
    nullable: true
  })
  create?: MessageCreateWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutReceiverInput], {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageUpsertWithWhereUniqueWithoutReceiverInput], {
    nullable: true
  })
  upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageCreateManyReceiverInputEnvelope, {
    nullable: true
  })
  createMany?: MessageCreateManyReceiverInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  set?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  delete?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  connect?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageUpdateWithWhereUniqueWithoutReceiverInput], {
    nullable: true
  })
  update?: MessageUpdateWithWhereUniqueWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageUpdateManyWithWhereWithoutReceiverInput], {
    nullable: true
  })
  updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MessageScalarWhereInput[] | undefined;
}
