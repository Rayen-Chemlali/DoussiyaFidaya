import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByXray_resultsArgs } from "./args/GroupByXray_resultsArgs";
import { Xray_results } from "../../../models/Xray_results";
import { Xray_resultsGroupBy } from "../../outputs/Xray_resultsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Xray_results)
export class GroupByXray_resultsResolver {
  @TypeGraphQL.Query(_returns => [Xray_resultsGroupBy], {
    nullable: false
  })
  async groupByXray_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByXray_resultsArgs): Promise<Xray_resultsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).xray_results.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
