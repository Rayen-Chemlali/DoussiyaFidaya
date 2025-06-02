import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstVerification_tokensArgs } from "./args/FindFirstVerification_tokensArgs";
import { Verification_tokens } from "../../../models/Verification_tokens";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Verification_tokens)
export class FindFirstVerification_tokensResolver {
  @TypeGraphQL.Query(_returns => Verification_tokens, {
    nullable: true
  })
  async findFirstVerification_tokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVerification_tokensArgs): Promise<Verification_tokens | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verification_tokens.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
