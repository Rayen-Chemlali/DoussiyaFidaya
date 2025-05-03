import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneCtscan_resultsArgs } from "./args/UpdateOneCtscan_resultsArgs";
import { Ctscan_results } from "../../../models/Ctscan_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Ctscan_results)
export class UpdateOneCtscan_resultsResolver {
  @TypeGraphQL.Mutation(_returns => Ctscan_results, {
    nullable: true
  })
  async updateOneCtscan_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneCtscan_resultsArgs): Promise<Ctscan_results | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ctscan_results.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
