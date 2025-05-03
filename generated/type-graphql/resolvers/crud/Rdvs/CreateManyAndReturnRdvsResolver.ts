import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnRdvsArgs } from "./args/CreateManyAndReturnRdvsArgs";
import { Rdvs } from "../../../models/Rdvs";
import { CreateManyAndReturnRdvs } from "../../outputs/CreateManyAndReturnRdvs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Rdvs)
export class CreateManyAndReturnRdvsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnRdvs], {
    nullable: false
  })
  async createManyAndReturnRdvs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnRdvsArgs): Promise<CreateManyAndReturnRdvs[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).rdvs.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
