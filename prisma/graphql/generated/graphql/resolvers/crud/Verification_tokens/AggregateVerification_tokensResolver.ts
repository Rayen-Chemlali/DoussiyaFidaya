import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateVerification_tokensArgs } from "./args/AggregateVerification_tokensArgs";
import { Verification_tokens } from "../../../models/Verification_tokens";
import { AggregateVerification_tokens } from "../../outputs/AggregateVerification_tokens";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Verification_tokens)
export class AggregateVerification_tokensResolver {
  @TypeGraphQL.Query(_returns => AggregateVerification_tokens, {
    nullable: false
  })
  async aggregateVerification_tokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVerification_tokensArgs): Promise<AggregateVerification_tokens> {
    return getPrismaFromContext(ctx).verification_tokens.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
