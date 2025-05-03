import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCertificatesArgs } from "./args/AggregateCertificatesArgs";
import { Certificates } from "../../../models/Certificates";
import { AggregateCertificates } from "../../outputs/AggregateCertificates";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Certificates)
export class AggregateCertificatesResolver {
  @TypeGraphQL.Query(_returns => AggregateCertificates, {
    nullable: false
  })
  async aggregateCertificates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCertificatesArgs): Promise<AggregateCertificates> {
    return getPrismaFromContext(ctx).certificates.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
