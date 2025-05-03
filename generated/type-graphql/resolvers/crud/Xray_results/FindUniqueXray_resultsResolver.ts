import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueXray_resultsArgs } from "./args/FindUniqueXray_resultsArgs";
import { Xray_results } from "../../../models/Xray_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Xray_results)
export class FindUniqueXray_resultsResolver {
  @TypeGraphQL.Query(_returns => Xray_results, {
    nullable: true
  })
  async findUniqueXray_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueXray_resultsArgs): Promise<Xray_results | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).xray_results.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
