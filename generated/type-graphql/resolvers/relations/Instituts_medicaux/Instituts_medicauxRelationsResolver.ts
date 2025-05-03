import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Authorizations } from "../../../models/Authorizations";
import { Consultations } from "../../../models/Consultations";
import { Doctor_instituts } from "../../../models/Doctor_instituts";
import { Instituts_medicaux } from "../../../models/Instituts_medicaux";
import { Instituts_medicauxAuthorizationsArgs } from "./args/Instituts_medicauxAuthorizationsArgs";
import { Instituts_medicauxConsultationsArgs } from "./args/Instituts_medicauxConsultationsArgs";
import { Instituts_medicauxDoctor_institutsArgs } from "./args/Instituts_medicauxDoctor_institutsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Instituts_medicaux)
export class Instituts_medicauxRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Authorizations], {
    nullable: false
  })
  async authorizations(@TypeGraphQL.Root() instituts_medicaux: Instituts_medicaux, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: Instituts_medicauxAuthorizationsArgs): Promise<Authorizations[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).instituts_medicaux.findUniqueOrThrow({
      where: {
        id: instituts_medicaux.id,
      },
    }).authorizations({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Consultations], {
    nullable: false
  })
  async consultations(@TypeGraphQL.Root() instituts_medicaux: Instituts_medicaux, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: Instituts_medicauxConsultationsArgs): Promise<Consultations[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).instituts_medicaux.findUniqueOrThrow({
      where: {
        id: instituts_medicaux.id,
      },
    }).consultations({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Doctor_instituts], {
    nullable: false
  })
  async doctor_instituts(@TypeGraphQL.Root() instituts_medicaux: Instituts_medicaux, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: Instituts_medicauxDoctor_institutsArgs): Promise<Doctor_instituts[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).instituts_medicaux.findUniqueOrThrow({
      where: {
        id: instituts_medicaux.id,
      },
    }).doctor_instituts({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
