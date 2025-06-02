import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByAnalysis_resultsArgs } from "./args/GroupByAnalysis_resultsArgs";
import { Analysis_results } from "../../../models/Analysis_results";
import { Analysis_resultsGroupBy } from "../../outputs/Analysis_resultsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Analysis_results)
export class GroupByAnalysis_resultsResolver {
  @TypeGraphQL.Query(_returns => [Analysis_resultsGroupBy], {
    nullable: false
  })
  async groupByAnalysis_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAnalysis_resultsArgs): Promise<Analysis_resultsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analysis_results.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
