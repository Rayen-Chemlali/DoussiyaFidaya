import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMessageArgs } from "./args/CreateManyAndReturnMessageArgs";
import { Message } from "../../../models/Message";
import { CreateManyAndReturnMessage } from "../../outputs/CreateManyAndReturnMessage";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Message)
export class CreateManyAndReturnMessageResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMessage], {
    nullable: false
  })
  async createManyAndReturnMessage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMessageArgs): Promise<CreateManyAndReturnMessage[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).message.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
