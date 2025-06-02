import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Consultation_lab_requests } from "../../../models/Consultation_lab_requests";
import { Consultations } from "../../../models/Consultations";
import { Lab_requests } from "../../../models/Lab_requests";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Consultation_lab_requests)
export class Consultation_lab_requestsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Lab_requests, {
    nullable: false
  })
  async lab_requests(@TypeGraphQL.Root() consultation_lab_requests: Consultation_lab_requests, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Lab_requests> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultation_lab_requests.findUniqueOrThrow({
      where: {
        consultation_id_lab_request_id: {
          consultation_id: consultation_lab_requests.consultation_id,
          lab_request_id: consultation_lab_requests.lab_request_id,
        },
      },
    }).lab_requests({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Consultations, {
    nullable: false
  })
  async consultations(@TypeGraphQL.Root() consultation_lab_requests: Consultation_lab_requests, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Consultations> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultation_lab_requests.findUniqueOrThrow({
      where: {
        consultation_id_lab_request_id: {
          consultation_id: consultation_lab_requests.consultation_id,
          lab_request_id: consultation_lab_requests.lab_request_id,
        },
      },
    }).consultations({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
