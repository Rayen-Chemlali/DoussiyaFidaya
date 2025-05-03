import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstDoctor_institutsOrThrowArgs } from "./args/FindFirstDoctor_institutsOrThrowArgs";
import { Doctor_instituts } from "../../../models/Doctor_instituts";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Doctor_instituts)
export class FindFirstDoctor_institutsOrThrowResolver {
  @TypeGraphQL.Query(_returns => Doctor_instituts, {
    nullable: true
  })
  async findFirstDoctor_institutsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstDoctor_institutsOrThrowArgs): Promise<Doctor_instituts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctor_instituts.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
