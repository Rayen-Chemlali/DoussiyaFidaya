import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnConsultation_lab_requestsArgs } from "./args/CreateManyAndReturnConsultation_lab_requestsArgs";
import { Consultation_lab_requests } from "../../../models/Consultation_lab_requests";
import { CreateManyAndReturnConsultation_lab_requests } from "../../outputs/CreateManyAndReturnConsultation_lab_requests";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Consultation_lab_requests)
export class CreateManyAndReturnConsultation_lab_requestsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnConsultation_lab_requests], {
    nullable: false
  })
  async createManyAndReturnConsultation_lab_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnConsultation_lab_requestsArgs): Promise<CreateManyAndReturnConsultation_lab_requests[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultation_lab_requests.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
