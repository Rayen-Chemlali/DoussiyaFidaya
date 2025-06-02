import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnCliniquesArgs } from "./args/CreateManyAndReturnCliniquesArgs";
import { Cliniques } from "../../../models/Cliniques";
import { CreateManyAndReturnCliniques } from "../../outputs/CreateManyAndReturnCliniques";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cliniques)
export class CreateManyAndReturnCliniquesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnCliniques], {
    nullable: false
  })
  async createManyAndReturnCliniques(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnCliniquesArgs): Promise<CreateManyAndReturnCliniques[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).cliniques.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
