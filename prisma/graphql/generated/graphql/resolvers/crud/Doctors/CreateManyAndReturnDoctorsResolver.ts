import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnDoctorsArgs } from "./args/CreateManyAndReturnDoctorsArgs";
import { Doctors } from "../../../models/Doctors";
import { CreateManyAndReturnDoctors } from "../../outputs/CreateManyAndReturnDoctors";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Doctors)
export class CreateManyAndReturnDoctorsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnDoctors], {
    nullable: false
  })
  async createManyAndReturnDoctors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnDoctorsArgs): Promise<CreateManyAndReturnDoctors[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctors.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
