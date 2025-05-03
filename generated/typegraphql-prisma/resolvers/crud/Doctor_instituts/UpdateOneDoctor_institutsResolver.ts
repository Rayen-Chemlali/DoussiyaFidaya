import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneDoctor_institutsArgs } from "./args/UpdateOneDoctor_institutsArgs";
import { Doctor_instituts } from "../../../models/Doctor_instituts";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Doctor_instituts)
export class UpdateOneDoctor_institutsResolver {
  @TypeGraphQL.Mutation(_returns => Doctor_instituts, {
    nullable: true
  })
  async updateOneDoctor_instituts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneDoctor_institutsArgs): Promise<Doctor_instituts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctor_instituts.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
