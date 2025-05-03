import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateConsultation_lab_requestsArgs } from "./args/AggregateConsultation_lab_requestsArgs";
import { Consultation_lab_requests } from "../../../models/Consultation_lab_requests";
import { AggregateConsultation_lab_requests } from "../../outputs/AggregateConsultation_lab_requests";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Consultation_lab_requests)
export class AggregateConsultation_lab_requestsResolver {
  @TypeGraphQL.Query(_returns => AggregateConsultation_lab_requests, {
    nullable: false
  })
  async aggregateConsultation_lab_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateConsultation_lab_requestsArgs): Promise<AggregateConsultation_lab_requests> {
    return getPrismaFromContext(ctx).consultation_lab_requests.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
