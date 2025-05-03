import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByCliniquesArgs } from "./args/GroupByCliniquesArgs";
import { Cliniques } from "../../../models/Cliniques";
import { CliniquesGroupBy } from "../../outputs/CliniquesGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cliniques)
export class GroupByCliniquesResolver {
  @TypeGraphQL.Query(_returns => [CliniquesGroupBy], {
    nullable: false
  })
  async groupByCliniques(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCliniquesArgs): Promise<CliniquesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).cliniques.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
