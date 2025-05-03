import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByRdvsArgs } from "./args/GroupByRdvsArgs";
import { Rdvs } from "../../../models/Rdvs";
import { RdvsGroupBy } from "../../outputs/RdvsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Rdvs)
export class GroupByRdvsResolver {
  @TypeGraphQL.Query(_returns => [RdvsGroupBy], {
    nullable: false
  })
  async groupByRdvs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByRdvsArgs): Promise<RdvsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).rdvs.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
