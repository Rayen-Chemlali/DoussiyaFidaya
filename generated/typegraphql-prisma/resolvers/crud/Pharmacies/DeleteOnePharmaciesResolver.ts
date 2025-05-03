import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOnePharmaciesArgs } from "./args/DeleteOnePharmaciesArgs";
import { Pharmacies } from "../../../models/Pharmacies";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pharmacies)
export class DeleteOnePharmaciesResolver {
  @TypeGraphQL.Mutation(_returns => Pharmacies, {
    nullable: true
  })
  async deleteOnePharmacies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePharmaciesArgs): Promise<Pharmacies | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pharmacies.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
