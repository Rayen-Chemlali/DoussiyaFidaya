import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPatientsArgs } from "./args/CreateManyAndReturnPatientsArgs";
import { Patients } from "../../../models/Patients";
import { CreateManyAndReturnPatients } from "../../outputs/CreateManyAndReturnPatients";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Patients)
export class CreateManyAndReturnPatientsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPatients], {
    nullable: false
  })
  async createManyAndReturnPatients(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPatientsArgs): Promise<CreateManyAndReturnPatients[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patients.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
