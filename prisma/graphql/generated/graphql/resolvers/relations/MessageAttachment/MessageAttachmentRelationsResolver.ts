import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Message } from "../../../models/Message";
import { MessageAttachment } from "../../../models/MessageAttachment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MessageAttachment)
export class MessageAttachmentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Message, {
    nullable: false
  })
  async message(@TypeGraphQL.Root() messageAttachment: MessageAttachment, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Message> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).messageAttachment.findUniqueOrThrow({
      where: {
        id: messageAttachment.id,
      },
    }).message({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
