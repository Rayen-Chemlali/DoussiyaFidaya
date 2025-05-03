import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLaboratoriesArgs } from "./args/FindUniqueLaboratoriesArgs";
import { Laboratories } from "../../../models/Laboratories";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Laboratories)
export class FindUniqueLaboratoriesResolver {
  @TypeGraphQL.Query(_returns => Laboratories, {
    nullable: true
  })
  async findUniqueLaboratories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLaboratoriesArgs): Promise<Laboratories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).laboratories.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
