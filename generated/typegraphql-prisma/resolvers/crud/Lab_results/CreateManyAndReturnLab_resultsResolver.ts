import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnLab_resultsArgs } from "./args/CreateManyAndReturnLab_resultsArgs";
import { Lab_results } from "../../../models/Lab_results";
import { CreateManyAndReturnLab_results } from "../../outputs/CreateManyAndReturnLab_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_results)
export class CreateManyAndReturnLab_resultsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnLab_results], {
    nullable: false
  })
  async createManyAndReturnLab_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnLab_resultsArgs): Promise<CreateManyAndReturnLab_results[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_results.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
