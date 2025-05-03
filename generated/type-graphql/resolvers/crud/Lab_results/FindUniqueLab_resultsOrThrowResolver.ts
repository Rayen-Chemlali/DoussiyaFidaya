import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLab_resultsOrThrowArgs } from "./args/FindUniqueLab_resultsOrThrowArgs";
import { Lab_results } from "../../../models/Lab_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_results)
export class FindUniqueLab_resultsOrThrowResolver {
  @TypeGraphQL.Query(_returns => Lab_results, {
    nullable: true
  })
  async findUniqueLab_resultsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLab_resultsOrThrowArgs): Promise<Lab_results | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_results.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
