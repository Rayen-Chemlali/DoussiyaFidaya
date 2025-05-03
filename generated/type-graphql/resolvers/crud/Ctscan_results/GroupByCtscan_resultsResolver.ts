import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByCtscan_resultsArgs } from "./args/GroupByCtscan_resultsArgs";
import { Ctscan_results } from "../../../models/Ctscan_results";
import { Ctscan_resultsGroupBy } from "../../outputs/Ctscan_resultsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Ctscan_results)
export class GroupByCtscan_resultsResolver {
  @TypeGraphQL.Query(_returns => [Ctscan_resultsGroupBy], {
    nullable: false
  })
  async groupByCtscan_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCtscan_resultsArgs): Promise<Ctscan_resultsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ctscan_results.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
