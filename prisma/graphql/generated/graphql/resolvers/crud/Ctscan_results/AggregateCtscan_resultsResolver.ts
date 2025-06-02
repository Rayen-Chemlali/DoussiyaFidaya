import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCtscan_resultsArgs } from "./args/AggregateCtscan_resultsArgs";
import { Ctscan_results } from "../../../models/Ctscan_results";
import { AggregateCtscan_results } from "../../outputs/AggregateCtscan_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Ctscan_results)
export class AggregateCtscan_resultsResolver {
  @TypeGraphQL.Query(_returns => AggregateCtscan_results, {
    nullable: false
  })
  async aggregateCtscan_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCtscan_resultsArgs): Promise<AggregateCtscan_results> {
    return getPrismaFromContext(ctx).ctscan_results.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
