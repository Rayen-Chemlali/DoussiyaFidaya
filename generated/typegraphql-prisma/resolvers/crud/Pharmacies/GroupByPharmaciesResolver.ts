import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPharmaciesArgs } from "./args/GroupByPharmaciesArgs";
import { Pharmacies } from "../../../models/Pharmacies";
import { PharmaciesGroupBy } from "../../outputs/PharmaciesGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pharmacies)
export class GroupByPharmaciesResolver {
  @TypeGraphQL.Query(_returns => [PharmaciesGroupBy], {
    nullable: false
  })
  async groupByPharmacies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPharmaciesArgs): Promise<PharmaciesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pharmacies.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
