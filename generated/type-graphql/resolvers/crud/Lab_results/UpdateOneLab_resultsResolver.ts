import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneLab_resultsArgs } from "./args/UpdateOneLab_resultsArgs";
import { Lab_results } from "../../../models/Lab_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_results)
export class UpdateOneLab_resultsResolver {
  @TypeGraphQL.Mutation(_returns => Lab_results, {
    nullable: true
  })
  async updateOneLab_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneLab_resultsArgs): Promise<Lab_results | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_results.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
