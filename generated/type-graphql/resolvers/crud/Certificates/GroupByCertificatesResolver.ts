import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByCertificatesArgs } from "./args/GroupByCertificatesArgs";
import { Certificates } from "../../../models/Certificates";
import { CertificatesGroupBy } from "../../outputs/CertificatesGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Certificates)
export class GroupByCertificatesResolver {
  @TypeGraphQL.Query(_returns => [CertificatesGroupBy], {
    nullable: false
  })
  async groupByCertificates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCertificatesArgs): Promise<CertificatesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).certificates.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
