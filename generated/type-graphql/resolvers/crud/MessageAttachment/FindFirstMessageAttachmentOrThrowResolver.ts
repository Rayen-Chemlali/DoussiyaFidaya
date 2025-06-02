import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMessageAttachmentOrThrowArgs } from "./args/FindFirstMessageAttachmentOrThrowArgs";
import { MessageAttachment } from "../../../models/MessageAttachment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MessageAttachment)
export class FindFirstMessageAttachmentOrThrowResolver {
  @TypeGraphQL.Query(_returns => MessageAttachment, {
    nullable: true
  })
  async findFirstMessageAttachmentOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMessageAttachmentOrThrowArgs): Promise<MessageAttachment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).messageAttachment.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
