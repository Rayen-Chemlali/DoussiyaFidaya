import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMessageAttachmentArgs } from "./args/GroupByMessageAttachmentArgs";
import { MessageAttachment } from "../../../models/MessageAttachment";
import { MessageAttachmentGroupBy } from "../../outputs/MessageAttachmentGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MessageAttachment)
export class GroupByMessageAttachmentResolver {
  @TypeGraphQL.Query(_returns => [MessageAttachmentGroupBy], {
    nullable: false
  })
  async groupByMessageAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMessageAttachmentArgs): Promise<MessageAttachmentGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).messageAttachment.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
