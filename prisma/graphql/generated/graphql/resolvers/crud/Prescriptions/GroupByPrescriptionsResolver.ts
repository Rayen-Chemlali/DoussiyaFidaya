import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPrescriptionsArgs } from "./args/GroupByPrescriptionsArgs";
import { Prescriptions } from "../../../models/Prescriptions";
import { PrescriptionsGroupBy } from "../../outputs/PrescriptionsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Prescriptions)
export class GroupByPrescriptionsResolver {
  @TypeGraphQL.Query(_returns => [PrescriptionsGroupBy], {
    nullable: false
  })
  async groupByPrescriptions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPrescriptionsArgs): Promise<PrescriptionsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescriptions.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
