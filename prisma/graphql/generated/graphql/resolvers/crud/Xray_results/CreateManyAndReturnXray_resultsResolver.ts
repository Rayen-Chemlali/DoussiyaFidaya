import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnXray_resultsArgs } from "./args/CreateManyAndReturnXray_resultsArgs";
import { Xray_results } from "../../../models/Xray_results";
import { CreateManyAndReturnXray_results } from "../../outputs/CreateManyAndReturnXray_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Xray_results)
export class CreateManyAndReturnXray_resultsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnXray_results], {
    nullable: false
  })
  async createManyAndReturnXray_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnXray_resultsArgs): Promise<CreateManyAndReturnXray_results[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).xray_results.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
