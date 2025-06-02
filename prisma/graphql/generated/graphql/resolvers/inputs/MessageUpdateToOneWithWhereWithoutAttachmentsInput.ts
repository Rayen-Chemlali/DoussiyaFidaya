import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageUpdateWithoutAttachmentsInput } from "../inputs/MessageUpdateWithoutAttachmentsInput";
import { MessageWhereInput } from "../inputs/MessageWhereInput";

@TypeGraphQL.InputType("MessageUpdateToOneWithWhereWithoutAttachmentsInput", {})
export class MessageUpdateToOneWithWhereWithoutAttachmentsInput {
  @TypeGraphQL.Field(_type => MessageWhereInput, {
    nullable: true
  })
  where?: MessageWhereInput | undefined;

  @TypeGraphQL.Field(_type => MessageUpdateWithoutAttachmentsInput, {
    nullable: false
  })
  data!: MessageUpdateWithoutAttachmentsInput;
}
