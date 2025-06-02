import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneMessageAttachmentArgs } from "./args/DeleteOneMessageAttachmentArgs";
import { MessageAttachment } from "../../../models/MessageAttachment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MessageAttachment)
export class DeleteOneMessageAttachmentResolver {
  @TypeGraphQL.Mutation(_returns => MessageAttachment, {
    nullable: true
  })
  async deleteOneMessageAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneMessageAttachmentArgs): Promise<MessageAttachment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).messageAttachment.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
