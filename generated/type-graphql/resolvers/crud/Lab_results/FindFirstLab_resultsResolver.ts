import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLab_resultsArgs } from "./args/FindFirstLab_resultsArgs";
import { Lab_results } from "../../../models/Lab_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_results)
export class FindFirstLab_resultsResolver {
  @TypeGraphQL.Query(_returns => Lab_results, {
    nullable: true
  })
  async findFirstLab_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLab_resultsArgs): Promise<Lab_results | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_results.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
