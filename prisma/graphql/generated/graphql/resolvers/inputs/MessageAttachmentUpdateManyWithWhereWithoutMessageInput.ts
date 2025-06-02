import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageAttachmentScalarWhereInput } from "../inputs/MessageAttachmentScalarWhereInput";
import { MessageAttachmentUpdateManyMutationInput } from "../inputs/MessageAttachmentUpdateManyMutationInput";

@TypeGraphQL.InputType("MessageAttachmentUpdateManyWithWhereWithoutMessageInput", {})
export class MessageAttachmentUpdateManyWithWhereWithoutMessageInput {
  @TypeGraphQL.Field(_type => MessageAttachmentScalarWhereInput, {
    nullable: false
  })
  where!: MessageAttachmentScalarWhereInput;

  @TypeGraphQL.Field(_type => MessageAttachmentUpdateManyMutationInput, {
    nullable: false
  })
  data!: MessageAttachmentUpdateManyMutationInput;
}
