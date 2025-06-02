import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessageAttachmentUpdateInput } from "../../../inputs/MessageAttachmentUpdateInput";
import { MessageAttachmentWhereUniqueInput } from "../../../inputs/MessageAttachmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMessageAttachmentArgs {
  @TypeGraphQL.Field(_type => MessageAttachmentUpdateInput, {
    nullable: false
  })
  data!: MessageAttachmentUpdateInput;

  @TypeGraphQL.Field(_type => MessageAttachmentWhereUniqueInput, {
    nullable: false
  })
  where!: MessageAttachmentWhereUniqueInput;
}
