import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstConsultation_lab_requestsArgs } from "./args/FindFirstConsultation_lab_requestsArgs";
import { Consultation_lab_requests } from "../../../models/Consultation_lab_requests";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Consultation_lab_requests)
export class FindFirstConsultation_lab_requestsResolver {
  @TypeGraphQL.Query(_returns => Consultation_lab_requests, {
    nullable: true
  })
  async findFirstConsultation_lab_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstConsultation_lab_requestsArgs): Promise<Consultation_lab_requests | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultation_lab_requests.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
