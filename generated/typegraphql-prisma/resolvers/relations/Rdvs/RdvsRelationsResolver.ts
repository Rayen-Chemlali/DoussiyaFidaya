import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Consultations } from "../../../models/Consultations";
import { Doctors } from "../../../models/Doctors";
import { Patients } from "../../../models/Patients";
import { Rdv_requests } from "../../../models/Rdv_requests";
import { Rdvs } from "../../../models/Rdvs";
import { RdvsConsultationsArgs } from "./args/RdvsConsultationsArgs";
import { RdvsDoctorsArgs } from "./args/RdvsDoctorsArgs";
import { RdvsRdv_requests_rdv_requests_rdv_idTordvsArgs } from "./args/RdvsRdv_requests_rdv_requests_rdv_idTordvsArgs";
import { RdvsRdv_requests_rdvs_rdv_request_idTordv_requestsArgs } from "./args/RdvsRdv_requests_rdvs_rdv_request_idTordv_requestsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Rdvs)
export class RdvsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Rdv_requests, {
    nullable: true
  })
  async rdv_requests_rdv_requests_rdv_idTordvs(@TypeGraphQL.Root() rdvs: Rdvs, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: RdvsRdv_requests_rdv_requests_rdv_idTordvsArgs): Promise<Rdv_requests | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).rdvs.findUniqueOrThrow({
      where: {
        id: rdvs.id,
      },
    }).rdv_requests_rdv_requests_rdv_idTordvs({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Consultations, {
    nullable: true
  })
  async consultations(@TypeGraphQL.Root() rdvs: Rdvs, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: RdvsConsultationsArgs): Promise<Consultations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).rdvs.findUniqueOrThrow({
      where: {
        id: rdvs.id,
      },
    }).consultations({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Patients, {
    nullable: false
  })
  async patients(@TypeGraphQL.Root() rdvs: Rdvs, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Patients> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).rdvs.findUniqueOrThrow({
      where: {
        id: rdvs.id,
      },
    }).patients({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Rdv_requests, {
    nullable: true
  })
  async rdv_requests_rdvs_rdv_request_idTordv_requests(@TypeGraphQL.Root() rdvs: Rdvs, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: RdvsRdv_requests_rdvs_rdv_request_idTordv_requestsArgs): Promise<Rdv_requests | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).rdvs.findUniqueOrThrow({
      where: {
        id: rdvs.id,
      },
    }).rdv_requests_rdvs_rdv_request_idTordv_requests({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Doctors, {
    nullable: true
  })
  async doctors(@TypeGraphQL.Root() rdvs: Rdvs, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: RdvsDoctorsArgs): Promise<Doctors | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).rdvs.findUniqueOrThrow({
      where: {
        id: rdvs.id,
      },
    }).doctors({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
