import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLab_attachmentsArgs } from "./args/AggregateLab_attachmentsArgs";
import { Lab_attachments } from "../../../models/Lab_attachments";
import { AggregateLab_attachments } from "../../outputs/AggregateLab_attachments";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_attachments)
export class AggregateLab_attachmentsResolver {
  @TypeGraphQL.Query(_returns => AggregateLab_attachments, {
    nullable: false
  })
  async aggregateLab_attachments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLab_attachmentsArgs): Promise<AggregateLab_attachments> {
    return getPrismaFromContext(ctx).lab_attachments.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
