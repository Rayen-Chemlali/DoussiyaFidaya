import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePrescriptionsArgs } from "./args/AggregatePrescriptionsArgs";
import { Prescriptions } from "../../../models/Prescriptions";
import { AggregatePrescriptions } from "../../outputs/AggregatePrescriptions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Prescriptions)
export class AggregatePrescriptionsResolver {
  @TypeGraphQL.Query(_returns => AggregatePrescriptions, {
    nullable: false
  })
  async aggregatePrescriptions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePrescriptionsArgs): Promise<AggregatePrescriptions> {
    return getPrismaFromContext(ctx).prescriptions.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
