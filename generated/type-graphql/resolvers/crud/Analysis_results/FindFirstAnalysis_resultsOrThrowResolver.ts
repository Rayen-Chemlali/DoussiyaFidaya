import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAnalysis_resultsOrThrowArgs } from "./args/FindFirstAnalysis_resultsOrThrowArgs";
import { Analysis_results } from "../../../models/Analysis_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Analysis_results)
export class FindFirstAnalysis_resultsOrThrowResolver {
  @TypeGraphQL.Query(_returns => Analysis_results, {
    nullable: true
  })
  async findFirstAnalysis_resultsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAnalysis_resultsOrThrowArgs): Promise<Analysis_results | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analysis_results.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
