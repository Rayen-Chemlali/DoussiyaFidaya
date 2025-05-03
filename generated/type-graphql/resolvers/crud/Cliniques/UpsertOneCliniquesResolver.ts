import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneCliniquesArgs } from "./args/UpsertOneCliniquesArgs";
import { Cliniques } from "../../../models/Cliniques";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cliniques)
export class UpsertOneCliniquesResolver {
  @TypeGraphQL.Mutation(_returns => Cliniques, {
    nullable: false
  })
  async upsertOneCliniques(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneCliniquesArgs): Promise<Cliniques> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).cliniques.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
