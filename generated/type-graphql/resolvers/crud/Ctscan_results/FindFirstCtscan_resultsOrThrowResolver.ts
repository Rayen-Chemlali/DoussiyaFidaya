import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCtscan_resultsOrThrowArgs } from "./args/FindFirstCtscan_resultsOrThrowArgs";
import { Ctscan_results } from "../../../models/Ctscan_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Ctscan_results)
export class FindFirstCtscan_resultsOrThrowResolver {
  @TypeGraphQL.Query(_returns => Ctscan_results, {
    nullable: true
  })
  async findFirstCtscan_resultsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCtscan_resultsOrThrowArgs): Promise<Ctscan_results | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ctscan_results.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
