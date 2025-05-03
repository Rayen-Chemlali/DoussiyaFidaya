import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCtscan_resultsArgs } from "./args/FindFirstCtscan_resultsArgs";
import { Ctscan_results } from "../../../models/Ctscan_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Ctscan_results)
export class FindFirstCtscan_resultsResolver {
  @TypeGraphQL.Query(_returns => Ctscan_results, {
    nullable: true
  })
  async findFirstCtscan_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCtscan_resultsArgs): Promise<Ctscan_results | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ctscan_results.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
