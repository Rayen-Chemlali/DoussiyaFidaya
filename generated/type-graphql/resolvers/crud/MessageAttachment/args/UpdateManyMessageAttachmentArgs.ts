import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessageAttachmentUpdateManyMutationInput } from "../../../inputs/MessageAttachmentUpdateManyMutationInput";
import { MessageAttachmentWhereInput } from "../../../inputs/MessageAttachmentWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMessageAttachmentArgs {
  @TypeGraphQL.Field(_type => MessageAttachmentUpdateManyMutationInput, {
    nullable: false
  })
  data!: MessageAttachmentUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MessageAttachmentWhereInput, {
    nullable: true
  })
  where?: MessageAttachmentWhereInput | undefined;
}
