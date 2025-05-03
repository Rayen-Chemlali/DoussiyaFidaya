import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstXray_resultsArgs } from "./args/FindFirstXray_resultsArgs";
import { Xray_results } from "../../../models/Xray_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Xray_results)
export class FindFirstXray_resultsResolver {
  @TypeGraphQL.Query(_returns => Xray_results, {
    nullable: true
  })
  async findFirstXray_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstXray_resultsArgs): Promise<Xray_results | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).xray_results.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
