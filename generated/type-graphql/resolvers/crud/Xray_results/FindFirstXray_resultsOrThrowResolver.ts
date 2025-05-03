import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstXray_resultsOrThrowArgs } from "./args/FindFirstXray_resultsOrThrowArgs";
import { Xray_results } from "../../../models/Xray_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Xray_results)
export class FindFirstXray_resultsOrThrowResolver {
  @TypeGraphQL.Query(_returns => Xray_results, {
    nullable: true
  })
  async findFirstXray_resultsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstXray_resultsOrThrowArgs): Promise<Xray_results | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).xray_results.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
