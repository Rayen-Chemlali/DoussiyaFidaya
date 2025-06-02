import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Consultation_lab_requests } from "../../../models/Consultation_lab_requests";
import { Consultations } from "../../../models/Consultations";
import { Doctors } from "../../../models/Doctors";
import { Instituts_medicaux } from "../../../models/Instituts_medicaux";
import { Lab_requests } from "../../../models/Lab_requests";
import { Patients } from "../../../models/Patients";
import { Prescriptions } from "../../../models/Prescriptions";
import { Rdvs } from "../../../models/Rdvs";
import { ConsultationsConsultation_lab_requestsArgs } from "./args/ConsultationsConsultation_lab_requestsArgs";
import { ConsultationsDoctorsArgs } from "./args/ConsultationsDoctorsArgs";
import { ConsultationsInstituts_medicauxArgs } from "./args/ConsultationsInstituts_medicauxArgs";
import { ConsultationsLab_requestsArgs } from "./args/ConsultationsLab_requestsArgs";
import { ConsultationsPrescriptionsArgs } from "./args/ConsultationsPrescriptionsArgs";
import { ConsultationsRdvsArgs } from "./args/ConsultationsRdvsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Consultations)
export class ConsultationsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Consultation_lab_requests], {
    nullable: false
  })
  async consultation_lab_requests(@TypeGraphQL.Root() consultations: Consultations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ConsultationsConsultation_lab_requestsArgs): Promise<Consultation_lab_requests[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultations.findUniqueOrThrow({
      where: {
        id: consultations.id,
      },
    }).consultation_lab_requests({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Prescriptions, {
    nullable: true
  })
  async prescriptions(@TypeGraphQL.Root() consultations: Consultations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ConsultationsPrescriptionsArgs): Promise<Prescriptions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultations.findUniqueOrThrow({
      where: {
        id: consultations.id,
      },
    }).prescriptions({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Instituts_medicaux, {
    nullable: true
  })
  async instituts_medicaux(@TypeGraphQL.Root() consultations: Consultations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ConsultationsInstituts_medicauxArgs): Promise<Instituts_medicaux | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultations.findUniqueOrThrow({
      where: {
        id: consultations.id,
      },
    }).instituts_medicaux({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Patients, {
    nullable: false
  })
  async patients(@TypeGraphQL.Root() consultations: Consultations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Patients> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultations.findUniqueOrThrow({
      where: {
        id: consultations.id,
      },
    }).patients({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Doctors, {
    nullable: true
  })
  async doctors(@TypeGraphQL.Root() consultations: Consultations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ConsultationsDoctorsArgs): Promise<Doctors | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultations.findUniqueOrThrow({
      where: {
        id: consultations.id,
      },
    }).doctors({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Rdvs, {
    nullable: true
  })
  async rdvs(@TypeGraphQL.Root() consultations: Consultations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ConsultationsRdvsArgs): Promise<Rdvs | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultations.findUniqueOrThrow({
      where: {
        id: consultations.id,
      },
    }).rdvs({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Lab_requests], {
    nullable: false
  })
  async lab_requests(@TypeGraphQL.Root() consultations: Consultations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ConsultationsLab_requestsArgs): Promise<Lab_requests[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultations.findUniqueOrThrow({
      where: {
        id: consultations.id,
      },
    }).lab_requests({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
