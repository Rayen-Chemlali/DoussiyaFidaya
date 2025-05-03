import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePharmaciesArgs } from "./args/AggregatePharmaciesArgs";
import { Pharmacies } from "../../../models/Pharmacies";
import { AggregatePharmacies } from "../../outputs/AggregatePharmacies";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pharmacies)
export class AggregatePharmaciesResolver {
  @TypeGraphQL.Query(_returns => AggregatePharmacies, {
    nullable: false
  })
  async aggregatePharmacies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePharmaciesArgs): Promise<AggregatePharmacies> {
    return getPrismaFromContext(ctx).pharmacies.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
