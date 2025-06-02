import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneVerification_tokensArgs } from "./args/CreateOneVerification_tokensArgs";
import { Verification_tokens } from "../../../models/Verification_tokens";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Verification_tokens)
export class CreateOneVerification_tokensResolver {
  @TypeGraphQL.Mutation(_returns => Verification_tokens, {
    nullable: false
  })
  async createOneVerification_tokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneVerification_tokensArgs): Promise<Verification_tokens> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verification_tokens.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
