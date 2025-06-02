import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByVerification_tokensArgs } from "./args/GroupByVerification_tokensArgs";
import { Verification_tokens } from "../../../models/Verification_tokens";
import { Verification_tokensGroupBy } from "../../outputs/Verification_tokensGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Verification_tokens)
export class GroupByVerification_tokensResolver {
  @TypeGraphQL.Query(_returns => [Verification_tokensGroupBy], {
    nullable: false
  })
  async groupByVerification_tokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVerification_tokensArgs): Promise<Verification_tokensGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verification_tokens.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
