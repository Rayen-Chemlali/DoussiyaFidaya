import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByLab_documentsArgs } from "./args/GroupByLab_documentsArgs";
import { Lab_documents } from "../../../models/Lab_documents";
import { Lab_documentsGroupBy } from "../../outputs/Lab_documentsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_documents)
export class GroupByLab_documentsResolver {
  @TypeGraphQL.Query(_returns => [Lab_documentsGroupBy], {
    nullable: false
  })
  async groupByLab_documents(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLab_documentsArgs): Promise<Lab_documentsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
