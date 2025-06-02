import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateNestedOneWithoutReceivedMessagesInput } from "../inputs/DoctorsCreateNestedOneWithoutReceivedMessagesInput";
import { DoctorsCreateNestedOneWithoutSentMessagesInput } from "../inputs/DoctorsCreateNestedOneWithoutSentMessagesInput";

@TypeGraphQL.InputType("MessageCreateWithoutAttachmentsInput", {})
export class MessageCreateWithoutAttachmentsInput {
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

  @TypeGraphQL.Field(_type => DoctorsCreateNestedOneWithoutSentMessagesInput, {
    nullable: false
  })
  sender!: DoctorsCreateNestedOneWithoutSentMessagesInput;

  @TypeGraphQL.Field(_type => DoctorsCreateNestedOneWithoutReceivedMessagesInput, {
    nullable: false
  })
  receiver!: DoctorsCreateNestedOneWithoutReceivedMessagesInput;
}
