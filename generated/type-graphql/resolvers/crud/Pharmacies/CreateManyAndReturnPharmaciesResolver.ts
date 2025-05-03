import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPharmaciesArgs } from "./args/CreateManyAndReturnPharmaciesArgs";
import { Pharmacies } from "../../../models/Pharmacies";
import { CreateManyAndReturnPharmacies } from "../../outputs/CreateManyAndReturnPharmacies";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pharmacies)
export class CreateManyAndReturnPharmaciesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPharmacies], {
    nullable: false
  })
  async createManyAndReturnPharmacies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPharmaciesArgs): Promise<CreateManyAndReturnPharmacies[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pharmacies.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
