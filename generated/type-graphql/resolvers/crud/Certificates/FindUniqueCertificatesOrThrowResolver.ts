import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCertificatesOrThrowArgs } from "./args/FindUniqueCertificatesOrThrowArgs";
import { Certificates } from "../../../models/Certificates";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Certificates)
export class FindUniqueCertificatesOrThrowResolver {
  @TypeGraphQL.Query(_returns => Certificates, {
    nullable: true
  })
  async findUniqueCertificatesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCertificatesOrThrowArgs): Promise<Certificates | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).certificates.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
