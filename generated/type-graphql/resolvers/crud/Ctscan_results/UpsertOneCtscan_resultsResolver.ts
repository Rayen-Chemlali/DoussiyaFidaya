import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneCtscan_resultsArgs } from "./args/UpsertOneCtscan_resultsArgs";
import { Ctscan_results } from "../../../models/Ctscan_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Ctscan_results)
export class UpsertOneCtscan_resultsResolver {
  @TypeGraphQL.Mutation(_returns => Ctscan_results, {
    nullable: false
  })
  async upsertOneCtscan_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneCtscan_resultsArgs): Promise<Ctscan_results> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ctscan_results.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
