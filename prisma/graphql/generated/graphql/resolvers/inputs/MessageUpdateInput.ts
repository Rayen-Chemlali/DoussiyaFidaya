import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DoctorsUpdateOneRequiredWithoutReceivedMessagesNestedInput } from "../inputs/DoctorsUpdateOneRequiredWithoutReceivedMessagesNestedInput";
import { DoctorsUpdateOneRequiredWithoutSentMessagesNestedInput } from "../inputs/DoctorsUpdateOneRequiredWithoutSentMessagesNestedInput";
import { MessageAttachmentUpdateManyWithoutMessageNestedInput } from "../inputs/MessageAttachmentUpdateManyWithoutMessageNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MessageUpdateInput", {})
export class MessageUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  content?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isRead?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  patientId?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateOneRequiredWithoutSentMessagesNestedInput, {
    nullable: true
  })
  sender?: DoctorsUpdateOneRequiredWithoutSentMessagesNestedInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateOneRequiredWithoutReceivedMessagesNestedInput, {
    nullable: true
  })
  receiver?: DoctorsUpdateOneRequiredWithoutReceivedMessagesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MessageAttachmentUpdateManyWithoutMessageNestedInput, {
    nullable: true
  })
  attachments?: MessageAttachmentUpdateManyWithoutMessageNestedInput | undefined;
}
