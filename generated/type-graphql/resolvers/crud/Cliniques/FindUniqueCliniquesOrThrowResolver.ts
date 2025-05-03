import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCliniquesOrThrowArgs } from "./args/FindUniqueCliniquesOrThrowArgs";
import { Cliniques } from "../../../models/Cliniques";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cliniques)
export class FindUniqueCliniquesOrThrowResolver {
  @TypeGraphQL.Query(_returns => Cliniques, {
    nullable: true
  })
  async findUniqueCliniquesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCliniquesOrThrowArgs): Promise<Cliniques | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).cliniques.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
