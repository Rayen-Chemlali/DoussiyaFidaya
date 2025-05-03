import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLab_resultsArgs } from "./args/AggregateLab_resultsArgs";
import { Lab_results } from "../../../models/Lab_results";
import { AggregateLab_results } from "../../outputs/AggregateLab_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_results)
export class AggregateLab_resultsResolver {
  @TypeGraphQL.Query(_returns => AggregateLab_results, {
    nullable: false
  })
  async aggregateLab_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLab_resultsArgs): Promise<AggregateLab_results> {
    return getPrismaFromContext(ctx).lab_results.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
