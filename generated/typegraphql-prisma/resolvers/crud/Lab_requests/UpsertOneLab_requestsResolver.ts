import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneLab_requestsArgs } from "./args/UpsertOneLab_requestsArgs";
import { Lab_requests } from "../../../models/Lab_requests";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_requests)
export class UpsertOneLab_requestsResolver {
  @TypeGraphQL.Mutation(_returns => Lab_requests, {
    nullable: false
  })
  async upsertOneLab_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneLab_requestsArgs): Promise<Lab_requests> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_requests.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
