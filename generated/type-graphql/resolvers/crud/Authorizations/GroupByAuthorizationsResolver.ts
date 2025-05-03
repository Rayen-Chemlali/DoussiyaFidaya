import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByAuthorizationsArgs } from "./args/GroupByAuthorizationsArgs";
import { Authorizations } from "../../../models/Authorizations";
import { AuthorizationsGroupBy } from "../../outputs/AuthorizationsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Authorizations)
export class GroupByAuthorizationsResolver {
  @TypeGraphQL.Query(_returns => [AuthorizationsGroupBy], {
    nullable: false
  })
  async groupByAuthorizations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAuthorizationsArgs): Promise<AuthorizationsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).authorizations.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
