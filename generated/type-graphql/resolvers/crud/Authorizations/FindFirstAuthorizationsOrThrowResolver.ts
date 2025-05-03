import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAuthorizationsOrThrowArgs } from "./args/FindFirstAuthorizationsOrThrowArgs";
import { Authorizations } from "../../../models/Authorizations";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Authorizations)
export class FindFirstAuthorizationsOrThrowResolver {
  @TypeGraphQL.Query(_returns => Authorizations, {
    nullable: true
  })
  async findFirstAuthorizationsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAuthorizationsOrThrowArgs): Promise<Authorizations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).authorizations.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
