import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnAnalysis_resultsArgs } from "./args/CreateManyAndReturnAnalysis_resultsArgs";
import { Analysis_results } from "../../../models/Analysis_results";
import { CreateManyAndReturnAnalysis_results } from "../../outputs/CreateManyAndReturnAnalysis_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Analysis_results)
export class CreateManyAndReturnAnalysis_resultsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnAnalysis_results], {
    nullable: false
  })
  async createManyAndReturnAnalysis_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnAnalysis_resultsArgs): Promise<CreateManyAndReturnAnalysis_results[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analysis_results.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
