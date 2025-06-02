import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessageAttachmentOrderByWithRelationInput } from "../../../inputs/MessageAttachmentOrderByWithRelationInput";
import { MessageAttachmentWhereInput } from "../../../inputs/MessageAttachmentWhereInput";
import { MessageAttachmentWhereUniqueInput } from "../../../inputs/MessageAttachmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMessageAttachmentArgs {
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
}
