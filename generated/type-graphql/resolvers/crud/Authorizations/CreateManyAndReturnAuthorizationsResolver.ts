import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnAuthorizationsArgs } from "./args/CreateManyAndReturnAuthorizationsArgs";
import { Authorizations } from "../../../models/Authorizations";
import { CreateManyAndReturnAuthorizations } from "../../outputs/CreateManyAndReturnAuthorizations";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Authorizations)
export class CreateManyAndReturnAuthorizationsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnAuthorizations], {
    nullable: false
  })
  async createManyAndReturnAuthorizations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnAuthorizationsArgs): Promise<CreateManyAndReturnAuthorizations[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).authorizations.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
