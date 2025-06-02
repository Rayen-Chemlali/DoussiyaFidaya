import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnLaboratoriesArgs } from "./args/CreateManyAndReturnLaboratoriesArgs";
import { Laboratories } from "../../../models/Laboratories";
import { CreateManyAndReturnLaboratories } from "../../outputs/CreateManyAndReturnLaboratories";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Laboratories)
export class CreateManyAndReturnLaboratoriesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnLaboratories], {
    nullable: false
  })
  async createManyAndReturnLaboratories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnLaboratoriesArgs): Promise<CreateManyAndReturnLaboratories[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).laboratories.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
