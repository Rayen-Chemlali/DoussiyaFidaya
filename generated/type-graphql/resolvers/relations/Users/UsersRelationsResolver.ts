import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Doctors } from "../../../models/Doctors";
import { Patients } from "../../../models/Patients";
import { Users } from "../../../models/Users";
import { UsersDoctorsArgs } from "./args/UsersDoctorsArgs";
import { UsersPatientsArgs } from "./args/UsersPatientsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Users)
export class UsersRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Doctors, {
    nullable: true
  })
  async doctors(@TypeGraphQL.Root() users: Users, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UsersDoctorsArgs): Promise<Doctors | null> {
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

  @TypeGraphQL.FieldResolver(_type => Patients, {
    nullable: true
  })
  async patients(@TypeGraphQL.Root() users: Users, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UsersPatientsArgs): Promise<Patients | null> {
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
