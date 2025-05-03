import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneDoctor_institutsArgs } from "./args/UpsertOneDoctor_institutsArgs";
import { Doctor_instituts } from "../../../models/Doctor_instituts";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Doctor_instituts)
export class UpsertOneDoctor_institutsResolver {
  @TypeGraphQL.Mutation(_returns => Doctor_instituts, {
    nullable: false
  })
  async upsertOneDoctor_instituts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneDoctor_institutsArgs): Promise<Doctor_instituts> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctor_instituts.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
