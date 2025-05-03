import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Consultations } from "../../../models/Consultations";
import { Doctors } from "../../../models/Doctors";
import { Medications } from "../../../models/Medications";
import { Patients } from "../../../models/Patients";
import { Prescriptions } from "../../../models/Prescriptions";
import { PrescriptionsConsultationsArgs } from "./args/PrescriptionsConsultationsArgs";
import { PrescriptionsDoctorsArgs } from "./args/PrescriptionsDoctorsArgs";
import { PrescriptionsMedicationsArgs } from "./args/PrescriptionsMedicationsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Prescriptions)
export class PrescriptionsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Consultations, {
    nullable: true
  })
  async consultations(@TypeGraphQL.Root() prescriptions: Prescriptions, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PrescriptionsConsultationsArgs): Promise<Consultations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescriptions.findUniqueOrThrow({
      where: {
        id: prescriptions.id,
      },
    }).consultations({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Medications], {
    nullable: false
  })
  async medications(@TypeGraphQL.Root() prescriptions: Prescriptions, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PrescriptionsMedicationsArgs): Promise<Medications[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescriptions.findUniqueOrThrow({
      where: {
        id: prescriptions.id,
      },
    }).medications({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Doctors, {
    nullable: true
  })
  async doctors(@TypeGraphQL.Root() prescriptions: Prescriptions, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PrescriptionsDoctorsArgs): Promise<Doctors | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescriptions.findUniqueOrThrow({
      where: {
        id: prescriptions.id,
      },
    }).doctors({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Patients, {
    nullable: false
  })
  async patients(@TypeGraphQL.Root() prescriptions: Prescriptions, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Patients> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescriptions.findUniqueOrThrow({
      where: {
        id: prescriptions.id,
      },
    }).patients({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
