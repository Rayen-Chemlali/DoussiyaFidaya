import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessageAttachmentWhereInput } from "../../../inputs/MessageAttachmentWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMessageAttachmentArgs {
  @TypeGraphQL.Field(_type => MessageAttachmentWhereInput, {
    nullable: true
  })
  where?: MessageAttachmentWhereInput | undefined;
}
