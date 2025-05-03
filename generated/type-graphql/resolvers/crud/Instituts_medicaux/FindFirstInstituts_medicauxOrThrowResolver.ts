import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstInstituts_medicauxOrThrowArgs } from "./args/FindFirstInstituts_medicauxOrThrowArgs";
import { Instituts_medicaux } from "../../../models/Instituts_medicaux";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Instituts_medicaux)
export class FindFirstInstituts_medicauxOrThrowResolver {
  @TypeGraphQL.Query(_returns => Instituts_medicaux, {
    nullable: true
  })
  async findFirstInstituts_medicauxOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstInstituts_medicauxOrThrowArgs): Promise<Instituts_medicaux | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).instituts_medicaux.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
