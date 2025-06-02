import * as TypeGraphQL from "type-graphql";

export enum MessageAttachmentScalarFieldEnum {
  id = "id",
  filename = "filename",
  path = "path",
  mimeType = "mimeType",
  size = "size",
  messageId = "messageId",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(MessageAttachmentScalarFieldEnum, {
  name: "MessageAttachmentScalarFieldEnum",
  description: undefined,
});
