import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstRdvsOrThrowArgs } from "./args/FindFirstRdvsOrThrowArgs";
import { Rdvs } from "../../../models/Rdvs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Rdvs)
export class FindFirstRdvsOrThrowResolver {
  @TypeGraphQL.Query(_returns => Rdvs, {
    nullable: true
  })
  async findFirstRdvsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstRdvsOrThrowArgs): Promise<Rdvs | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).rdvs.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
