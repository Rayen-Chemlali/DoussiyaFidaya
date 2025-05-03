import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneAnalysis_resultsArgs } from "./args/UpdateOneAnalysis_resultsArgs";
import { Analysis_results } from "../../../models/Analysis_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Analysis_results)
export class UpdateOneAnalysis_resultsResolver {
  @TypeGraphQL.Mutation(_returns => Analysis_results, {
    nullable: true
  })
  async updateOneAnalysis_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneAnalysis_resultsArgs): Promise<Analysis_results | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analysis_results.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
