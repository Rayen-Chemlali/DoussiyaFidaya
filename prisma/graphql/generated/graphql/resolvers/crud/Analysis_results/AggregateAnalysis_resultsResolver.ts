import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAnalysis_resultsArgs } from "./args/AggregateAnalysis_resultsArgs";
import { Analysis_results } from "../../../models/Analysis_results";
import { AggregateAnalysis_results } from "../../outputs/AggregateAnalysis_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Analysis_results)
export class AggregateAnalysis_resultsResolver {
  @TypeGraphQL.Query(_returns => AggregateAnalysis_results, {
    nullable: false
  })
  async aggregateAnalysis_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAnalysis_resultsArgs): Promise<AggregateAnalysis_results> {
    return getPrismaFromContext(ctx).analysis_results.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
