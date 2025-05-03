import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneLaboratoriesArgs } from "./args/UpsertOneLaboratoriesArgs";
import { Laboratories } from "../../../models/Laboratories";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Laboratories)
export class UpsertOneLaboratoriesResolver {
  @TypeGraphQL.Mutation(_returns => Laboratories, {
    nullable: false
  })
  async upsertOneLaboratories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneLaboratoriesArgs): Promise<Laboratories> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).laboratories.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
