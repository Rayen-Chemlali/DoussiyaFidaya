import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneHopitauxArgs } from "./args/DeleteOneHopitauxArgs";
import { Hopitaux } from "../../../models/Hopitaux";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Hopitaux)
export class DeleteOneHopitauxResolver {
  @TypeGraphQL.Mutation(_returns => Hopitaux, {
    nullable: true
  })
  async deleteOneHopitaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneHopitauxArgs): Promise<Hopitaux | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hopitaux.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
