import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Authorizations } from "../../../models/Authorizations";
import { Instituts_medicaux } from "../../../models/Instituts_medicaux";
import { Patients } from "../../../models/Patients";
import { AuthorizationsInstituts_medicauxArgs } from "./args/AuthorizationsInstituts_medicauxArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Authorizations)
export class AuthorizationsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Instituts_medicaux, {
    nullable: true
  })
  async instituts_medicaux(@TypeGraphQL.Root() authorizations: Authorizations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AuthorizationsInstituts_medicauxArgs): Promise<Instituts_medicaux | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).authorizations.findUniqueOrThrow({
      where: {
        id: authorizations.id,
      },
    }).instituts_medicaux({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Patients, {
    nullable: false
  })
  async patients(@TypeGraphQL.Root() authorizations: Authorizations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Patients> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).authorizations.findUniqueOrThrow({
      where: {
        id: authorizations.id,
      },
    }).patients({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
