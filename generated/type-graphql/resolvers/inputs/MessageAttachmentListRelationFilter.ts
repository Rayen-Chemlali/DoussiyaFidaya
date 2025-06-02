import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageAttachmentWhereInput } from "../inputs/MessageAttachmentWhereInput";

@TypeGraphQL.InputType("MessageAttachmentListRelationFilter", {})
export class MessageAttachmentListRelationFilter {
  @TypeGraphQL.Field(_type => MessageAttachmentWhereInput, {
    nullable: true
  })
  every?: MessageAttachmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => MessageAttachmentWhereInput, {
    nullable: true
  })
  some?: MessageAttachmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => MessageAttachmentWhereInput, {
    nullable: true
  })
  none?: MessageAttachmentWhereInput | undefined;
}
