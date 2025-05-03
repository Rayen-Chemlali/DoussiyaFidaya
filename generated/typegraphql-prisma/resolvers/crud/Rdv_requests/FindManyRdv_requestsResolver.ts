import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyRdv_requestsArgs } from "./args/FindManyRdv_requestsArgs";
import { Rdv_requests } from "../../../models/Rdv_requests";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Rdv_requests)
export class FindManyRdv_requestsResolver {
  @TypeGraphQL.Query(_returns => [Rdv_requests], {
    nullable: false
  })
  async findManyRdv_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyRdv_requestsArgs): Promise<Rdv_requests[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).rdv_requests.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
