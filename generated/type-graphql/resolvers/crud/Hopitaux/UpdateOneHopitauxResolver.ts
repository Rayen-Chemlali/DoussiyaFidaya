import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneHopitauxArgs } from "./args/UpdateOneHopitauxArgs";
import { Hopitaux } from "../../../models/Hopitaux";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Hopitaux)
export class UpdateOneHopitauxResolver {
  @TypeGraphQL.Mutation(_returns => Hopitaux, {
    nullable: true
  })
  async updateOneHopitaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneHopitauxArgs): Promise<Hopitaux | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hopitaux.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
