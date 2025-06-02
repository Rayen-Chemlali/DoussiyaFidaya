import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessageAttachmentWhereUniqueInput } from "../../../inputs/MessageAttachmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMessageAttachmentArgs {
  @TypeGraphQL.Field(_type => MessageAttachmentWhereUniqueInput, {
    nullable: false
  })
  where!: MessageAttachmentWhereUniqueInput;
}
