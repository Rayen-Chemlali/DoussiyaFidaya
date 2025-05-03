import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByLab_requestsArgs } from "./args/GroupByLab_requestsArgs";
import { Lab_requests } from "../../../models/Lab_requests";
import { Lab_requestsGroupBy } from "../../outputs/Lab_requestsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_requests)
export class GroupByLab_requestsResolver {
  @TypeGraphQL.Query(_returns => [Lab_requestsGroupBy], {
    nullable: false
  })
  async groupByLab_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLab_requestsArgs): Promise<Lab_requestsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_requests.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
