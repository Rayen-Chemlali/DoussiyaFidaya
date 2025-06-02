import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneCtscan_resultsArgs } from "./args/CreateOneCtscan_resultsArgs";
import { Ctscan_results } from "../../../models/Ctscan_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Ctscan_results)
export class CreateOneCtscan_resultsResolver {
  @TypeGraphQL.Mutation(_returns => Ctscan_results, {
    nullable: false
  })
  async createOneCtscan_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneCtscan_resultsArgs): Promise<Ctscan_results> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ctscan_results.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
