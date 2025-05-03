import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAuthorizationsArgs } from "./args/AggregateAuthorizationsArgs";
import { Authorizations } from "../../../models/Authorizations";
import { AggregateAuthorizations } from "../../outputs/AggregateAuthorizations";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Authorizations)
export class AggregateAuthorizationsResolver {
  @TypeGraphQL.Query(_returns => AggregateAuthorizations, {
    nullable: false
  })
  async aggregateAuthorizations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAuthorizationsArgs): Promise<AggregateAuthorizations> {
    return getPrismaFromContext(ctx).authorizations.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
