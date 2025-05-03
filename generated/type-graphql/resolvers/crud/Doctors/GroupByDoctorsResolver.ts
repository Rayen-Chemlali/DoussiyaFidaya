import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByDoctorsArgs } from "./args/GroupByDoctorsArgs";
import { Doctors } from "../../../models/Doctors";
import { DoctorsGroupBy } from "../../outputs/DoctorsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Doctors)
export class GroupByDoctorsResolver {
  @TypeGraphQL.Query(_returns => [DoctorsGroupBy], {
    nullable: false
  })
  async groupByDoctors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByDoctorsArgs): Promise<DoctorsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctors.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
