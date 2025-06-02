import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneMessageAttachmentArgs } from "./args/UpdateOneMessageAttachmentArgs";
import { MessageAttachment } from "../../../models/MessageAttachment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MessageAttachment)
export class UpdateOneMessageAttachmentResolver {
  @TypeGraphQL.Mutation(_returns => MessageAttachment, {
    nullable: true
  })
  async updateOneMessageAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneMessageAttachmentArgs): Promise<MessageAttachment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).messageAttachment.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
