import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueRdvsArgs } from "./args/FindUniqueRdvsArgs";
import { Rdvs } from "../../../models/Rdvs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Rdvs)
export class FindUniqueRdvsResolver {
  @TypeGraphQL.Query(_returns => Rdvs, {
    nullable: true
  })
  async findUniqueRdvs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueRdvsArgs): Promise<Rdvs | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).rdvs.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
