import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageAttachmentCreateManyMessageInput } from "../inputs/MessageAttachmentCreateManyMessageInput";

@TypeGraphQL.InputType("MessageAttachmentCreateManyMessageInputEnvelope", {})
export class MessageAttachmentCreateManyMessageInputEnvelope {
  @TypeGraphQL.Field(_type => [MessageAttachmentCreateManyMessageInput], {
    nullable: false
  })
  data!: MessageAttachmentCreateManyMessageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
