import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyVerification_tokensArgs } from "./args/FindManyVerification_tokensArgs";
import { Verification_tokens } from "../../../models/Verification_tokens";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Verification_tokens)
export class FindManyVerification_tokensResolver {
  @TypeGraphQL.Query(_returns => [Verification_tokens], {
    nullable: false
  })
  async findManyVerification_tokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyVerification_tokensArgs): Promise<Verification_tokens[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verification_tokens.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
