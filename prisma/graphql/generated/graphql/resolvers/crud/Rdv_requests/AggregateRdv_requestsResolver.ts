import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateRdv_requestsArgs } from "./args/AggregateRdv_requestsArgs";
import { Rdv_requests } from "../../../models/Rdv_requests";
import { AggregateRdv_requests } from "../../outputs/AggregateRdv_requests";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Rdv_requests)
export class AggregateRdv_requestsResolver {
  @TypeGraphQL.Query(_returns => AggregateRdv_requests, {
    nullable: false
  })
  async aggregateRdv_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRdv_requestsArgs): Promise<AggregateRdv_requests> {
    return getPrismaFromContext(ctx).rdv_requests.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
