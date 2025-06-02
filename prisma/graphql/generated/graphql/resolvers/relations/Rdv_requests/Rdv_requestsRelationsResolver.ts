import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Doctors } from "../../../models/Doctors";
import { Patients } from "../../../models/Patients";
import { Rdv_requests } from "../../../models/Rdv_requests";
import { Rdvs } from "../../../models/Rdvs";
import { Rdv_requestsDoctorsArgs } from "./args/Rdv_requestsDoctorsArgs";
import { Rdv_requestsRdvs_rdv_requests_rdv_idTordvsArgs } from "./args/Rdv_requestsRdvs_rdv_requests_rdv_idTordvsArgs";
import { Rdv_requestsRdvs_rdvs_rdv_request_idTordv_requestsArgs } from "./args/Rdv_requestsRdvs_rdvs_rdv_request_idTordv_requestsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Rdv_requests)
export class Rdv_requestsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Rdvs, {
    nullable: true
  })
  async rdvs_rdv_requests_rdv_idTordvs(@TypeGraphQL.Root() rdv_requests: Rdv_requests, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: Rdv_requestsRdvs_rdv_requests_rdv_idTordvsArgs): Promise<Rdvs | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).rdv_requests.findUniqueOrThrow({
      where: {
        id: rdv_requests.id,
      },
    }).rdvs_rdv_requests_rdv_idTordvs({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Patients, {
    nullable: false
  })
  async patients(@TypeGraphQL.Root() rdv_requests: Rdv_requests, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Patients> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).rdv_requests.findUniqueOrThrow({
      where: {
        id: rdv_requests.id,
      },
    }).patients({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Doctors, {
    nullable: true
  })
  async doctors(@TypeGraphQL.Root() rdv_requests: Rdv_requests, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: Rdv_requestsDoctorsArgs): Promise<Doctors | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).rdv_requests.findUniqueOrThrow({
      where: {
        id: rdv_requests.id,
      },
    }).doctors({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Rdvs, {
    nullable: true
  })
  async rdvs_rdvs_rdv_request_idTordv_requests(@TypeGraphQL.Root() rdv_requests: Rdv_requests, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: Rdv_requestsRdvs_rdvs_rdv_request_idTordv_requestsArgs): Promise<Rdvs | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).rdv_requests.findUniqueOrThrow({
      where: {
        id: rdv_requests.id,
      },
    }).rdvs_rdvs_rdv_request_idTordv_requests({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
