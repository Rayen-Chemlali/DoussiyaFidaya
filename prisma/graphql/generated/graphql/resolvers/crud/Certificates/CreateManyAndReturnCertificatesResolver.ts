import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnCertificatesArgs } from "./args/CreateManyAndReturnCertificatesArgs";
import { Certificates } from "../../../models/Certificates";
import { CreateManyAndReturnCertificates } from "../../outputs/CreateManyAndReturnCertificates";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Certificates)
export class CreateManyAndReturnCertificatesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnCertificates], {
    nullable: false
  })
  async createManyAndReturnCertificates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnCertificatesArgs): Promise<CreateManyAndReturnCertificates[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).certificates.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
