import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnCtscan_resultsArgs } from "./args/CreateManyAndReturnCtscan_resultsArgs";
import { Ctscan_results } from "../../../models/Ctscan_results";
import { CreateManyAndReturnCtscan_results } from "../../outputs/CreateManyAndReturnCtscan_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Ctscan_results)
export class CreateManyAndReturnCtscan_resultsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnCtscan_results], {
    nullable: false
  })
  async createManyAndReturnCtscan_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnCtscan_resultsArgs): Promise<CreateManyAndReturnCtscan_results[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ctscan_results.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
