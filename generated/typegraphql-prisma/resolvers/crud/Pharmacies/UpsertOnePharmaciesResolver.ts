import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOnePharmaciesArgs } from "./args/UpsertOnePharmaciesArgs";
import { Pharmacies } from "../../../models/Pharmacies";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pharmacies)
export class UpsertOnePharmaciesResolver {
  @TypeGraphQL.Mutation(_returns => Pharmacies, {
    nullable: false
  })
  async upsertOnePharmacies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePharmaciesArgs): Promise<Pharmacies> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pharmacies.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
