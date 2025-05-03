import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPrescriptionsArgs } from "./args/FindFirstPrescriptionsArgs";
import { Prescriptions } from "../../../models/Prescriptions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Prescriptions)
export class FindFirstPrescriptionsResolver {
  @TypeGraphQL.Query(_returns => Prescriptions, {
    nullable: true
  })
  async findFirstPrescriptions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPrescriptionsArgs): Promise<Prescriptions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescriptions.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
