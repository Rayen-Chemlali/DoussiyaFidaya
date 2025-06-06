import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Authorizations } from "../../../models/Authorizations";
import { Consultations } from "../../../models/Consultations";
import { Doctors } from "../../../models/Doctors";
import { Instituts_medicaux } from "../../../models/Instituts_medicaux";
import { Instituts_medicauxAuthorizationsArgs } from "./args/Instituts_medicauxAuthorizationsArgs";
import { Instituts_medicauxConsultationsArgs } from "./args/Instituts_medicauxConsultationsArgs";
import { Instituts_medicauxDoctorsArgs } from "./args/Instituts_medicauxDoctorsArgs";
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

  @TypeGraphQL.FieldResolver(_type => [Doctors], {
    nullable: false
  })
  async doctors(@TypeGraphQL.Root() instituts_medicaux: Instituts_medicaux, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: Instituts_medicauxDoctorsArgs): Promise<Doctors[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).instituts_medicaux.findUniqueOrThrow({
      where: {
        id: instituts_medicaux.id,
      },
    }).doctors({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
