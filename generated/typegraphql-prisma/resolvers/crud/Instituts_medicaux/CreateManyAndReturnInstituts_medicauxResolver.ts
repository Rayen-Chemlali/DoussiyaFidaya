import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnInstituts_medicauxArgs } from "./args/CreateManyAndReturnInstituts_medicauxArgs";
import { Instituts_medicaux } from "../../../models/Instituts_medicaux";
import { CreateManyAndReturnInstituts_medicaux } from "../../outputs/CreateManyAndReturnInstituts_medicaux";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Instituts_medicaux)
export class CreateManyAndReturnInstituts_medicauxResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnInstituts_medicaux], {
    nullable: false
  })
  async createManyAndReturnInstituts_medicaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnInstituts_medicauxArgs): Promise<CreateManyAndReturnInstituts_medicaux[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).instituts_medicaux.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
