import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByLab_attachmentsArgs } from "./args/GroupByLab_attachmentsArgs";
import { Lab_attachments } from "../../../models/Lab_attachments";
import { Lab_attachmentsGroupBy } from "../../outputs/Lab_attachmentsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_attachments)
export class GroupByLab_attachmentsResolver {
  @TypeGraphQL.Query(_returns => [Lab_attachmentsGroupBy], {
    nullable: false
  })
  async groupByLab_attachments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLab_attachmentsArgs): Promise<Lab_attachmentsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_attachments.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
