import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateXray_resultsArgs } from "./args/AggregateXray_resultsArgs";
import { Xray_results } from "../../../models/Xray_results";
import { AggregateXray_results } from "../../outputs/AggregateXray_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Xray_results)
export class AggregateXray_resultsResolver {
  @TypeGraphQL.Query(_returns => AggregateXray_results, {
    nullable: false
  })
  async aggregateXray_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateXray_resultsArgs): Promise<AggregateXray_results> {
    return getPrismaFromContext(ctx).xray_results.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
