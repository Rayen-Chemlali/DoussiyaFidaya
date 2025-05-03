import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByRdv_requestsArgs } from "./args/GroupByRdv_requestsArgs";
import { Rdv_requests } from "../../../models/Rdv_requests";
import { Rdv_requestsGroupBy } from "../../outputs/Rdv_requestsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Rdv_requests)
export class GroupByRdv_requestsResolver {
  @TypeGraphQL.Query(_returns => [Rdv_requestsGroupBy], {
    nullable: false
  })
  async groupByRdv_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByRdv_requestsArgs): Promise<Rdv_requestsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).rdv_requests.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
