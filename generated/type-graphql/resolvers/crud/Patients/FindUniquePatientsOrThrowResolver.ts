import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePatientsOrThrowArgs } from "./args/FindUniquePatientsOrThrowArgs";
import { Patients } from "../../../models/Patients";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Patients)
export class FindUniquePatientsOrThrowResolver {
  @TypeGraphQL.Query(_returns => Patients, {
    nullable: true
  })
  async findUniquePatientsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePatientsOrThrowArgs): Promise<Patients | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patients.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
