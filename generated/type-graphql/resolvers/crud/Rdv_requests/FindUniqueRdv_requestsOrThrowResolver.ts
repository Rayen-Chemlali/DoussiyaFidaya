import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueRdv_requestsOrThrowArgs } from "./args/FindUniqueRdv_requestsOrThrowArgs";
import { Rdv_requests } from "../../../models/Rdv_requests";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Rdv_requests)
export class FindUniqueRdv_requestsOrThrowResolver {
  @TypeGraphQL.Query(_returns => Rdv_requests, {
    nullable: true
  })
  async findUniqueRdv_requestsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueRdv_requestsOrThrowArgs): Promise<Rdv_requests | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).rdv_requests.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
