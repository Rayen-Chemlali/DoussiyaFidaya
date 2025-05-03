import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateRdvsArgs } from "./args/AggregateRdvsArgs";
import { Rdvs } from "../../../models/Rdvs";
import { AggregateRdvs } from "../../outputs/AggregateRdvs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Rdvs)
export class AggregateRdvsResolver {
  @TypeGraphQL.Query(_returns => AggregateRdvs, {
    nullable: false
  })
  async aggregateRdvs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRdvsArgs): Promise<AggregateRdvs> {
    return getPrismaFromContext(ctx).rdvs.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
