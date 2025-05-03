import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstInstituts_medicauxArgs } from "./args/FindFirstInstituts_medicauxArgs";
import { Instituts_medicaux } from "../../../models/Instituts_medicaux";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Instituts_medicaux)
export class FindFirstInstituts_medicauxResolver {
  @TypeGraphQL.Query(_returns => Instituts_medicaux, {
    nullable: true
  })
  async findFirstInstituts_medicaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstInstituts_medicauxArgs): Promise<Instituts_medicaux | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).instituts_medicaux.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
