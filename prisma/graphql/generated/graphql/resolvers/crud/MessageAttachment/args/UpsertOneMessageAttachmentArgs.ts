import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessageAttachmentCreateInput } from "../../../inputs/MessageAttachmentCreateInput";
import { MessageAttachmentUpdateInput } from "../../../inputs/MessageAttachmentUpdateInput";
import { MessageAttachmentWhereUniqueInput } from "../../../inputs/MessageAttachmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMessageAttachmentArgs {
  @TypeGraphQL.Field(_type => MessageAttachmentWhereUniqueInput, {
    nullable: false
  })
  where!: MessageAttachmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageAttachmentCreateInput, {
    nullable: false
  })
  create!: MessageAttachmentCreateInput;

  @TypeGraphQL.Field(_type => MessageAttachmentUpdateInput, {
    nullable: false
  })
  update!: MessageAttachmentUpdateInput;
}
