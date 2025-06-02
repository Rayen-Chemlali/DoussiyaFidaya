import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByLaboratoriesArgs } from "./args/GroupByLaboratoriesArgs";
import { Laboratories } from "../../../models/Laboratories";
import { LaboratoriesGroupBy } from "../../outputs/LaboratoriesGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Laboratories)
export class GroupByLaboratoriesResolver {
  @TypeGraphQL.Query(_returns => [LaboratoriesGroupBy], {
    nullable: false
  })
  async groupByLaboratories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLaboratoriesArgs): Promise<LaboratoriesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).laboratories.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
