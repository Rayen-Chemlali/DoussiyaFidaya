import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessageAttachmentOrderByWithRelationInput } from "../../../inputs/MessageAttachmentOrderByWithRelationInput";
import { MessageAttachmentWhereInput } from "../../../inputs/MessageAttachmentWhereInput";
import { MessageAttachmentWhereUniqueInput } from "../../../inputs/MessageAttachmentWhereUniqueInput";
import { MessageAttachmentScalarFieldEnum } from "../../../../enums/MessageAttachmentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMessageAttachmentOrThrowArgs {
  @TypeGraphQL.Field(_type => MessageAttachmentWhereInput, {
    nullable: true
  })
  where?: MessageAttachmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MessageAttachmentOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MessageAttachmentOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageAttachmentWhereUniqueInput, {
    nullable: true
  })
  cursor?: MessageAttachmentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MessageAttachmentScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "filename" | "path" | "mimeType" | "size" | "messageId" | "createdAt"> | undefined;
}
