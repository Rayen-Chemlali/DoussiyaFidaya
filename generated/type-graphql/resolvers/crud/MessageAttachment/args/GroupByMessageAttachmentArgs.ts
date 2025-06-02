import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessageAttachmentOrderByWithAggregationInput } from "../../../inputs/MessageAttachmentOrderByWithAggregationInput";
import { MessageAttachmentScalarWhereWithAggregatesInput } from "../../../inputs/MessageAttachmentScalarWhereWithAggregatesInput";
import { MessageAttachmentWhereInput } from "../../../inputs/MessageAttachmentWhereInput";
import { MessageAttachmentScalarFieldEnum } from "../../../../enums/MessageAttachmentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMessageAttachmentArgs {
  @TypeGraphQL.Field(_type => MessageAttachmentWhereInput, {
    nullable: true
  })
  where?: MessageAttachmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MessageAttachmentOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MessageAttachmentOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageAttachmentScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "filename" | "path" | "mimeType" | "size" | "messageId" | "createdAt">;

  @TypeGraphQL.Field(_type => MessageAttachmentScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MessageAttachmentScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
