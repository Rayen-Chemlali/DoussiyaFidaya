import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateHopitauxArgs } from "./args/AggregateHopitauxArgs";
import { Hopitaux } from "../../../models/Hopitaux";
import { AggregateHopitaux } from "../../outputs/AggregateHopitaux";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Hopitaux)
export class AggregateHopitauxResolver {
  @TypeGraphQL.Query(_returns => AggregateHopitaux, {
    nullable: false
  })
  async aggregateHopitaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateHopitauxArgs): Promise<AggregateHopitaux> {
    return getPrismaFromContext(ctx).hopitaux.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
