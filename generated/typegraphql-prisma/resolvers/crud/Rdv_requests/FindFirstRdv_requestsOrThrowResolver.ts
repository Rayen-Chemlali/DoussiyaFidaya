import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstRdv_requestsOrThrowArgs } from "./args/FindFirstRdv_requestsOrThrowArgs";
import { Rdv_requests } from "../../../models/Rdv_requests";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Rdv_requests)
export class FindFirstRdv_requestsOrThrowResolver {
  @TypeGraphQL.Query(_returns => Rdv_requests, {
    nullable: true
  })
  async findFirstRdv_requestsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstRdv_requestsOrThrowArgs): Promise<Rdv_requests | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).rdv_requests.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
