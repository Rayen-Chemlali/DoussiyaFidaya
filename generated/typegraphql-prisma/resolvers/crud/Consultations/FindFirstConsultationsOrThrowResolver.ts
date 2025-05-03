import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstConsultationsOrThrowArgs } from "./args/FindFirstConsultationsOrThrowArgs";
import { Consultations } from "../../../models/Consultations";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Consultations)
export class FindFirstConsultationsOrThrowResolver {
  @TypeGraphQL.Query(_returns => Consultations, {
    nullable: true
  })
  async findFirstConsultationsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstConsultationsOrThrowArgs): Promise<Consultations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultations.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
