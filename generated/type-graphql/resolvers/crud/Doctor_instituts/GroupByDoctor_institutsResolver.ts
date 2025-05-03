import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByDoctor_institutsArgs } from "./args/GroupByDoctor_institutsArgs";
import { Doctor_instituts } from "../../../models/Doctor_instituts";
import { Doctor_institutsGroupBy } from "../../outputs/Doctor_institutsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Doctor_instituts)
export class GroupByDoctor_institutsResolver {
  @TypeGraphQL.Query(_returns => [Doctor_institutsGroupBy], {
    nullable: false
  })
  async groupByDoctor_instituts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByDoctor_institutsArgs): Promise<Doctor_institutsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctor_instituts.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
