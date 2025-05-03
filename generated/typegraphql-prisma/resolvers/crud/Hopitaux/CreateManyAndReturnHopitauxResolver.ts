import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnHopitauxArgs } from "./args/CreateManyAndReturnHopitauxArgs";
import { Hopitaux } from "../../../models/Hopitaux";
import { CreateManyAndReturnHopitaux } from "../../outputs/CreateManyAndReturnHopitaux";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Hopitaux)
export class CreateManyAndReturnHopitauxResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnHopitaux], {
    nullable: false
  })
  async createManyAndReturnHopitaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnHopitauxArgs): Promise<CreateManyAndReturnHopitaux[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hopitaux.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
