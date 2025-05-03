import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnRdv_requestsArgs } from "./args/CreateManyAndReturnRdv_requestsArgs";
import { Rdv_requests } from "../../../models/Rdv_requests";
import { CreateManyAndReturnRdv_requests } from "../../outputs/CreateManyAndReturnRdv_requests";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Rdv_requests)
export class CreateManyAndReturnRdv_requestsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnRdv_requests], {
    nullable: false
  })
  async createManyAndReturnRdv_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnRdv_requestsArgs): Promise<CreateManyAndReturnRdv_requests[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).rdv_requests.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
