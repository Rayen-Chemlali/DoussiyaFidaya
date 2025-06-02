import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateNestedOneWithoutReceivedMessagesInput } from "../inputs/DoctorsCreateNestedOneWithoutReceivedMessagesInput";
import { MessageAttachmentCreateNestedManyWithoutMessageInput } from "../inputs/MessageAttachmentCreateNestedManyWithoutMessageInput";

@TypeGraphQL.InputType("MessageCreateWithoutSenderInput", {})
export class MessageCreateWithoutSenderInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isRead?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  patientId?: string | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateNestedOneWithoutReceivedMessagesInput, {
    nullable: false
  })
  receiver!: DoctorsCreateNestedOneWithoutReceivedMessagesInput;

  @TypeGraphQL.Field(_type => MessageAttachmentCreateNestedManyWithoutMessageInput, {
    nullable: true
  })
  attachments?: MessageAttachmentCreateNestedManyWithoutMessageInput | undefined;
}
