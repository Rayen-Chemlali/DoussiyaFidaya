import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyAnalysis_resultsArgs } from "./args/FindManyAnalysis_resultsArgs";
import { Analysis_results } from "../../../models/Analysis_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Analysis_results)
export class FindManyAnalysis_resultsResolver {
  @TypeGraphQL.Query(_returns => [Analysis_results], {
    nullable: false
  })
  async findManyAnalysis_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyAnalysis_resultsArgs): Promise<Analysis_results[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analysis_results.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
