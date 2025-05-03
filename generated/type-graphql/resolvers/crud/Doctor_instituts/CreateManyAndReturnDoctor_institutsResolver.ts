import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnDoctor_institutsArgs } from "./args/CreateManyAndReturnDoctor_institutsArgs";
import { Doctor_instituts } from "../../../models/Doctor_instituts";
import { CreateManyAndReturnDoctor_instituts } from "../../outputs/CreateManyAndReturnDoctor_instituts";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Doctor_instituts)
export class CreateManyAndReturnDoctor_institutsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnDoctor_instituts], {
    nullable: false
  })
  async createManyAndReturnDoctor_instituts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnDoctor_institutsArgs): Promise<CreateManyAndReturnDoctor_instituts[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctor_instituts.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
