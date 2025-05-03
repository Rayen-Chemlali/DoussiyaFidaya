import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneInstituts_medicauxArgs } from "./args/UpdateOneInstituts_medicauxArgs";
import { Instituts_medicaux } from "../../../models/Instituts_medicaux";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Instituts_medicaux)
export class UpdateOneInstituts_medicauxResolver {
  @TypeGraphQL.Mutation(_returns => Instituts_medicaux, {
    nullable: true
  })
  async updateOneInstituts_medicaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneInstituts_medicauxArgs): Promise<Instituts_medicaux | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).instituts_medicaux.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
