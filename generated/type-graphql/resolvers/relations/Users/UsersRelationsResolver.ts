import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Doctors } from "../../../models/Doctors";
import { Patients } from "../../../models/Patients";
import { Users } from "../../../models/Users";
import { Verification_tokens } from "../../../models/Verification_tokens";
import { UsersDoctorsArgs } from "./args/UsersDoctorsArgs";
import { UsersPatientsArgs } from "./args/UsersPatientsArgs";
import { UsersValidation_tokenArgs } from "./args/UsersValidation_tokenArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Users)
export class UsersRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Verification_tokens, {
    nullable: true
  })
  async validation_token(@TypeGraphQL.Root() users: Users, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UsersValidation_tokenArgs): Promise<Verification_tokens | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).users.findUniqueOrThrow({
      where: {
        id: users.id,
      },
    }).validation_token({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Doctors], {
    nullable: false
  })
  async doctors(@TypeGraphQL.Root() users: Users, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UsersDoctorsArgs): Promise<Doctors[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).users.findUniqueOrThrow({
      where: {
        id: users.id,
      },
    }).doctors({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Patients], {
    nullable: false
  })
  async patients(@TypeGraphQL.Root() users: Users, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UsersPatientsArgs): Promise<Patients[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).users.findUniqueOrThrow({
      where: {
        id: users.id,
      },
    }).patients({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
