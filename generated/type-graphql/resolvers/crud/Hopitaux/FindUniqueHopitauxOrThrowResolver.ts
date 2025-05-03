import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueHopitauxOrThrowArgs } from "./args/FindUniqueHopitauxOrThrowArgs";
import { Hopitaux } from "../../../models/Hopitaux";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Hopitaux)
export class FindUniqueHopitauxOrThrowResolver {
  @TypeGraphQL.Query(_returns => Hopitaux, {
    nullable: true
  })
  async getHopitaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueHopitauxOrThrowArgs): Promise<Hopitaux | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hopitaux.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
