import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLab_requestsArgs } from "./args/AggregateLab_requestsArgs";
import { Lab_requests } from "../../../models/Lab_requests";
import { AggregateLab_requests } from "../../outputs/AggregateLab_requests";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_requests)
export class AggregateLab_requestsResolver {
  @TypeGraphQL.Query(_returns => AggregateLab_requests, {
    nullable: false
  })
  async aggregateLab_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLab_requestsArgs): Promise<AggregateLab_requests> {
    return getPrismaFromContext(ctx).lab_requests.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
