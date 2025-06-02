import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessageAttachmentCreateInput } from "../../../inputs/MessageAttachmentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMessageAttachmentArgs {
  @TypeGraphQL.Field(_type => MessageAttachmentCreateInput, {
    nullable: false
  })
  data!: MessageAttachmentCreateInput;
}
