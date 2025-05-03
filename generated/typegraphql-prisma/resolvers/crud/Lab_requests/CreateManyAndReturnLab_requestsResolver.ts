import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnLab_requestsArgs } from "./args/CreateManyAndReturnLab_requestsArgs";
import { Lab_requests } from "../../../models/Lab_requests";
import { CreateManyAndReturnLab_requests } from "../../outputs/CreateManyAndReturnLab_requests";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_requests)
export class CreateManyAndReturnLab_requestsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnLab_requests], {
    nullable: false
  })
  async createManyAndReturnLab_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnLab_requestsArgs): Promise<CreateManyAndReturnLab_requests[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_requests.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
