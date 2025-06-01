import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Consultations } from "../../../models/Consultations";
import { Doctors } from "../../../models/Doctors";
import { Lab_documents } from "../../../models/Lab_documents";
import { Lab_requests } from "../../../models/Lab_requests";
import { Patients } from "../../../models/Patients";
import { Lab_requestsConsultationsArgs } from "./args/Lab_requestsConsultationsArgs";
import { Lab_requestsDoctorsArgs } from "./args/Lab_requestsDoctorsArgs";
import { Lab_requestsLab_documentsArgs } from "./args/Lab_requestsLab_documentsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_requests)
export class Lab_requestsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Consultations], {
    nullable: false
  })
  async consultations(@TypeGraphQL.Root() lab_requests: Lab_requests, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: Lab_requestsConsultationsArgs): Promise<Consultations[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_requests.findUniqueOrThrow({
      where: {
        id: lab_requests.id,
      },
    }).consultations({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Lab_documents], {
    nullable: false
  })
  async lab_documents(@TypeGraphQL.Root() lab_requests: Lab_requests, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: Lab_requestsLab_documentsArgs): Promise<Lab_documents[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_requests.findUniqueOrThrow({
      where: {
        id: lab_requests.id,
      },
    }).lab_documents({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Doctors, {
    nullable: true
  })
  async doctors(@TypeGraphQL.Root() lab_requests: Lab_requests, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: Lab_requestsDoctorsArgs): Promise<Doctors | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_requests.findUniqueOrThrow({
      where: {
        id: lab_requests.id,
      },
    }).doctors({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Patients, {
    nullable: false
  })
  async patients(@TypeGraphQL.Root() lab_requests: Lab_requests, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Patients> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_requests.findUniqueOrThrow({
      where: {
        id: lab_requests.id,
      },
    }).patients({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
