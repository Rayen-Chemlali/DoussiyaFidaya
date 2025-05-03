import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByLab_resultsArgs } from "./args/GroupByLab_resultsArgs";
import { Lab_results } from "../../../models/Lab_results";
import { Lab_resultsGroupBy } from "../../outputs/Lab_resultsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_results)
export class GroupByLab_resultsResolver {
  @TypeGraphQL.Query(_returns => [Lab_resultsGroupBy], {
    nullable: false
  })
  async groupByLab_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLab_resultsArgs): Promise<Lab_resultsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_results.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
