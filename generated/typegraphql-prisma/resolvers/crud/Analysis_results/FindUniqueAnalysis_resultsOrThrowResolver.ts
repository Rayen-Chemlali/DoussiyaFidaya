import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueAnalysis_resultsOrThrowArgs } from "./args/FindUniqueAnalysis_resultsOrThrowArgs";
import { Analysis_results } from "../../../models/Analysis_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Analysis_results)
export class FindUniqueAnalysis_resultsOrThrowResolver {
  @TypeGraphQL.Query(_returns => Analysis_results, {
    nullable: true
  })
  async findUniqueAnalysis_resultsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAnalysis_resultsOrThrowArgs): Promise<Analysis_results | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analysis_results.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
