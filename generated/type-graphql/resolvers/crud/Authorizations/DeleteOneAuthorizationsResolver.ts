import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneAuthorizationsArgs } from "./args/DeleteOneAuthorizationsArgs";
import { Authorizations } from "../../../models/Authorizations";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Authorizations)
export class DeleteOneAuthorizationsResolver {
  @TypeGraphQL.Mutation(_returns => Authorizations, {
    nullable: true
  })
  async deleteOneAuthorizations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneAuthorizationsArgs): Promise<Authorizations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).authorizations.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
