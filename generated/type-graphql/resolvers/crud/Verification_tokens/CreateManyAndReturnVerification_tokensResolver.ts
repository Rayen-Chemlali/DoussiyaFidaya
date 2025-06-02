import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnVerification_tokensArgs } from "./args/CreateManyAndReturnVerification_tokensArgs";
import { Verification_tokens } from "../../../models/Verification_tokens";
import { CreateManyAndReturnVerification_tokens } from "../../outputs/CreateManyAndReturnVerification_tokens";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Verification_tokens)
export class CreateManyAndReturnVerification_tokensResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnVerification_tokens], {
    nullable: false
  })
  async createManyAndReturnVerification_tokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnVerification_tokensArgs): Promise<CreateManyAndReturnVerification_tokens[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verification_tokens.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
