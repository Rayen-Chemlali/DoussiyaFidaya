import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePharmaciesOrThrowArgs } from "./args/FindUniquePharmaciesOrThrowArgs";
import { Pharmacies } from "../../../models/Pharmacies";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pharmacies)
export class FindUniquePharmaciesOrThrowResolver {
  @TypeGraphQL.Query(_returns => Pharmacies, {
    nullable: true
  })
  async findUniquePharmaciesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePharmaciesOrThrowArgs): Promise<Pharmacies | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pharmacies.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
