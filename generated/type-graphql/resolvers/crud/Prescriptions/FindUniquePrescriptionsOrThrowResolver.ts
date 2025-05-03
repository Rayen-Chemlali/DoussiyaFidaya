import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePrescriptionsOrThrowArgs } from "./args/FindUniquePrescriptionsOrThrowArgs";
import { Prescriptions } from "../../../models/Prescriptions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Prescriptions)
export class FindUniquePrescriptionsOrThrowResolver {
  @TypeGraphQL.Query(_returns => Prescriptions, {
    nullable: true
  })
  async findUniquePrescriptionsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePrescriptionsOrThrowArgs): Promise<Prescriptions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescriptions.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
