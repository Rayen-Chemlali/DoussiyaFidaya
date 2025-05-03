import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLab_requestsOrThrowArgs } from "./args/FindUniqueLab_requestsOrThrowArgs";
import { Lab_requests } from "../../../models/Lab_requests";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_requests)
export class FindUniqueLab_requestsOrThrowResolver {
  @TypeGraphQL.Query(_returns => Lab_requests, {
    nullable: true
  })
  async findUniqueLab_requestsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLab_requestsOrThrowArgs): Promise<Lab_requests | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_requests.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
