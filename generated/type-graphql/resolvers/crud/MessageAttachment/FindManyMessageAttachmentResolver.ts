import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyMessageAttachmentArgs } from "./args/FindManyMessageAttachmentArgs";
import { MessageAttachment } from "../../../models/MessageAttachment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MessageAttachment)
export class FindManyMessageAttachmentResolver {
  @TypeGraphQL.Query(_returns => [MessageAttachment], {
    nullable: false
  })
  async messageAttachments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMessageAttachmentArgs): Promise<MessageAttachment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).messageAttachment.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
