import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneRdv_requestsArgs } from "./args/UpsertOneRdv_requestsArgs";
import { Rdv_requests } from "../../../models/Rdv_requests";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Rdv_requests)
export class UpsertOneRdv_requestsResolver {
  @TypeGraphQL.Mutation(_returns => Rdv_requests, {
    nullable: false
  })
  async upsertOneRdv_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneRdv_requestsArgs): Promise<Rdv_requests> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).rdv_requests.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
