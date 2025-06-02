import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByHopitauxArgs } from "./args/GroupByHopitauxArgs";
import { Hopitaux } from "../../../models/Hopitaux";
import { HopitauxGroupBy } from "../../outputs/HopitauxGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Hopitaux)
export class GroupByHopitauxResolver {
  @TypeGraphQL.Query(_returns => [HopitauxGroupBy], {
    nullable: false
  })
  async groupByHopitaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByHopitauxArgs): Promise<HopitauxGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hopitaux.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
