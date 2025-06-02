import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLaboratoriesOrThrowArgs } from "./args/FindUniqueLaboratoriesOrThrowArgs";
import { Laboratories } from "../../../models/Laboratories";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Laboratories)
export class FindUniqueLaboratoriesOrThrowResolver {
  @TypeGraphQL.Query(_returns => Laboratories, {
    nullable: true
  })
  async findUniqueLaboratoriesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLaboratoriesOrThrowArgs): Promise<Laboratories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).laboratories.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
