import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Doctor_instituts } from "../../../models/Doctor_instituts";
import { Doctors } from "../../../models/Doctors";
import { Instituts_medicaux } from "../../../models/Instituts_medicaux";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Doctor_instituts)
export class Doctor_institutsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Doctors, {
    nullable: false
  })
  async doctors(@TypeGraphQL.Root() doctor_instituts: Doctor_instituts, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Doctors> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctor_instituts.findUniqueOrThrow({
      where: {
        doctor_id_institut_medical_id: {
          doctor_id: doctor_instituts.doctor_id,
          institut_medical_id: doctor_instituts.institut_medical_id,
        },
      },
    }).doctors({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Instituts_medicaux, {
    nullable: false
  })
  async instituts_medicaux(@TypeGraphQL.Root() doctor_instituts: Doctor_instituts, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Instituts_medicaux> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctor_instituts.findUniqueOrThrow({
      where: {
        doctor_id_institut_medical_id: {
          doctor_id: doctor_instituts.doctor_id,
          institut_medical_id: doctor_instituts.institut_medical_id,
        },
      },
    }).instituts_medicaux({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
