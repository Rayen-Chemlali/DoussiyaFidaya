import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneMessageAttachmentArgs } from "./args/CreateOneMessageAttachmentArgs";
import { MessageAttachment } from "../../../models/MessageAttachment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MessageAttachment)
export class CreateOneMessageAttachmentResolver {
  @TypeGraphQL.Mutation(_returns => MessageAttachment, {
    nullable: false
  })
  async createOneMessageAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneMessageAttachmentArgs): Promise<MessageAttachment> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).messageAttachment.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
