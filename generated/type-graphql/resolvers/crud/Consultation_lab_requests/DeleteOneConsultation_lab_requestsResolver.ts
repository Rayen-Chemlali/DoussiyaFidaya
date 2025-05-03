import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneConsultation_lab_requestsArgs } from "./args/DeleteOneConsultation_lab_requestsArgs";
import { Consultation_lab_requests } from "../../../models/Consultation_lab_requests";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Consultation_lab_requests)
export class DeleteOneConsultation_lab_requestsResolver {
  @TypeGraphQL.Mutation(_returns => Consultation_lab_requests, {
    nullable: true
  })
  async deleteOneConsultation_lab_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneConsultation_lab_requestsArgs): Promise<Consultation_lab_requests | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultation_lab_requests.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
