import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOnePrescriptionsArgs } from "./args/UpdateOnePrescriptionsArgs";
import { Prescriptions } from "../../../models/Prescriptions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Prescriptions)
export class UpdateOnePrescriptionsResolver {
  @TypeGraphQL.Mutation(_returns => Prescriptions, {
    nullable: true
  })
  async updateOnePrescriptions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePrescriptionsArgs): Promise<Prescriptions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescriptions.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
