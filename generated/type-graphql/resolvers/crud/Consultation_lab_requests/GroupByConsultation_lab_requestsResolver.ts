import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByConsultation_lab_requestsArgs } from "./args/GroupByConsultation_lab_requestsArgs";
import { Consultation_lab_requests } from "../../../models/Consultation_lab_requests";
import { Consultation_lab_requestsGroupBy } from "../../outputs/Consultation_lab_requestsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Consultation_lab_requests)
export class GroupByConsultation_lab_requestsResolver {
  @TypeGraphQL.Query(_returns => [Consultation_lab_requestsGroupBy], {
    nullable: false
  })
  async groupByConsultation_lab_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByConsultation_lab_requestsArgs): Promise<Consultation_lab_requestsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultation_lab_requests.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
