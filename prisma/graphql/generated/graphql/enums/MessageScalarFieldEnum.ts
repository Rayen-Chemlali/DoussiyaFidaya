import * as TypeGraphQL from "type-graphql";

export enum MessageScalarFieldEnum {
  id = "id",
  content = "content",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  senderId = "senderId",
  receiverId = "receiverId",
  isRead = "isRead",
  patientId = "patientId"
}
TypeGraphQL.registerEnumType(MessageScalarFieldEnum, {
  name: "MessageScalarFieldEnum",
  description: undefined,
});
