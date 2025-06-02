import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMessageAttachmentArgs } from "./args/AggregateMessageAttachmentArgs";
import { MessageAttachment } from "../../../models/MessageAttachment";
import { AggregateMessageAttachment } from "../../outputs/AggregateMessageAttachment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MessageAttachment)
export class AggregateMessageAttachmentResolver {
  @TypeGraphQL.Query(_returns => AggregateMessageAttachment, {
    nullable: false
  })
  async aggregateMessageAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMessageAttachmentArgs): Promise<AggregateMessageAttachment> {
    return getPrismaFromContext(ctx).messageAttachment.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
