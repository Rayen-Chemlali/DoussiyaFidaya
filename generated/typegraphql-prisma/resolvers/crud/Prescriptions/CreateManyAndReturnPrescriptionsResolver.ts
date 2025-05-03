import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPrescriptionsArgs } from "./args/CreateManyAndReturnPrescriptionsArgs";
import { Prescriptions } from "../../../models/Prescriptions";
import { CreateManyAndReturnPrescriptions } from "../../outputs/CreateManyAndReturnPrescriptions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Prescriptions)
export class CreateManyAndReturnPrescriptionsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPrescriptions], {
    nullable: false
  })
  async createManyAndReturnPrescriptions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPrescriptionsArgs): Promise<CreateManyAndReturnPrescriptions[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescriptions.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
