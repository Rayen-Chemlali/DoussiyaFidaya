import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneAnalysis_resultsArgs } from "./args/UpsertOneAnalysis_resultsArgs";
import { Analysis_results } from "../../../models/Analysis_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Analysis_results)
export class UpsertOneAnalysis_resultsResolver {
  @TypeGraphQL.Mutation(_returns => Analysis_results, {
    nullable: false
  })
  async upsertOneAnalysis_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneAnalysis_resultsArgs): Promise<Analysis_results> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analysis_results.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
