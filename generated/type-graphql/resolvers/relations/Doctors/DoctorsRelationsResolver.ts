import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Certificates } from "../../../models/Certificates";
import { Consultations } from "../../../models/Consultations";
import { Doctor_instituts } from "../../../models/Doctor_instituts";
import { Doctors } from "../../../models/Doctors";
import { Instituts_medicaux } from "../../../models/Instituts_medicaux";
import { Lab_requests } from "../../../models/Lab_requests";
import { Message } from "../../../models/Message";
import { Prescriptions } from "../../../models/Prescriptions";
import { Rdv_requests } from "../../../models/Rdv_requests";
import { Rdvs } from "../../../models/Rdvs";
import { Users } from "../../../models/Users";
import { DoctorsCertificatesArgs } from "./args/DoctorsCertificatesArgs";
import { DoctorsConsultationsArgs } from "./args/DoctorsConsultationsArgs";
import { DoctorsDoctor_institutsArgs } from "./args/DoctorsDoctor_institutsArgs";
import { DoctorsInstitutsArgs } from "./args/DoctorsInstitutsArgs";
import { DoctorsLab_requestsArgs } from "./args/DoctorsLab_requestsArgs";
import { DoctorsPrescriptionsArgs } from "./args/DoctorsPrescriptionsArgs";
import { DoctorsRdv_requestsArgs } from "./args/DoctorsRdv_requestsArgs";
import { DoctorsRdvsArgs } from "./args/DoctorsRdvsArgs";
import { DoctorsReceivedMessagesArgs } from "./args/DoctorsReceivedMessagesArgs";
import { DoctorsSentMessagesArgs } from "./args/DoctorsSentMessagesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Doctors)
export class DoctorsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Certificates], {
    nullable: false
  })
  async certificates(@TypeGraphQL.Root() doctors: Doctors, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DoctorsCertificatesArgs): Promise<Certificates[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctors.findUniqueOrThrow({
      where: {
        id: doctors.id,
      },
    }).certificates({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Consultations], {
    nullable: false
  })
  async consultations(@TypeGraphQL.Root() doctors: Doctors, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DoctorsConsultationsArgs): Promise<Consultations[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctors.findUniqueOrThrow({
      where: {
        id: doctors.id,
      },
    }).consultations({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Doctor_instituts], {
    nullable: false
  })
  async doctor_instituts(@TypeGraphQL.Root() doctors: Doctors, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DoctorsDoctor_institutsArgs): Promise<Doctor_instituts[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctors.findUniqueOrThrow({
      where: {
        id: doctors.id,
      },
    }).doctor_instituts({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Users, {
    nullable: false
  })
  async users(@TypeGraphQL.Root() doctors: Doctors, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Users> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctors.findUniqueOrThrow({
      where: {
        id: doctors.id,
      },
    }).users({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Lab_requests], {
    nullable: false
  })
  async lab_requests(@TypeGraphQL.Root() doctors: Doctors, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DoctorsLab_requestsArgs): Promise<Lab_requests[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctors.findUniqueOrThrow({
      where: {
        id: doctors.id,
      },
    }).lab_requests({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Prescriptions], {
    nullable: false
  })
  async prescriptions(@TypeGraphQL.Root() doctors: Doctors, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DoctorsPrescriptionsArgs): Promise<Prescriptions[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctors.findUniqueOrThrow({
      where: {
        id: doctors.id,
      },
    }).prescriptions({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Rdv_requests], {
    nullable: false
  })
  async rdv_requests(@TypeGraphQL.Root() doctors: Doctors, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DoctorsRdv_requestsArgs): Promise<Rdv_requests[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctors.findUniqueOrThrow({
      where: {
        id: doctors.id,
      },
    }).rdv_requests({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Rdvs], {
    nullable: false
  })
  async rdvs(@TypeGraphQL.Root() doctors: Doctors, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DoctorsRdvsArgs): Promise<Rdvs[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctors.findUniqueOrThrow({
      where: {
        id: doctors.id,
      },
    }).rdvs({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Message], {
    nullable: false
  })
  async sentMessages(@TypeGraphQL.Root() doctors: Doctors, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DoctorsSentMessagesArgs): Promise<Message[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctors.findUniqueOrThrow({
      where: {
        id: doctors.id,
      },
    }).sentMessages({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Message], {
    nullable: false
  })
  async receivedMessages(@TypeGraphQL.Root() doctors: Doctors, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DoctorsReceivedMessagesArgs): Promise<Message[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctors.findUniqueOrThrow({
      where: {
        id: doctors.id,
      },
    }).receivedMessages({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Instituts_medicaux], {
    nullable: false
  })
  async instituts(@TypeGraphQL.Root() doctors: Doctors, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DoctorsInstitutsArgs): Promise<Instituts_medicaux[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctors.findUniqueOrThrow({
      where: {
        id: doctors.id,
      },
    }).instituts({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
