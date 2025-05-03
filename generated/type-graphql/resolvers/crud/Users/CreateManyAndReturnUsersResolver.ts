import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnUsersArgs } from "./args/CreateManyAndReturnUsersArgs";
import { Users } from "../../../models/Users";
import { CreateManyAndReturnUsers } from "../../outputs/CreateManyAndReturnUsers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Users)
export class CreateManyAndReturnUsersResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnUsers], {
    nullable: false
  })
  async createManyAndReturnUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnUsersArgs): Promise<CreateManyAndReturnUsers[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).users.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
