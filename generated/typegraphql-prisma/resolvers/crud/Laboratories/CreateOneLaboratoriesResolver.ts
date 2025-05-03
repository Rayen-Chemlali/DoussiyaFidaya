import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneLaboratoriesArgs } from "./args/CreateOneLaboratoriesArgs";
import { Laboratories } from "../../../models/Laboratories";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Laboratories)
export class CreateOneLaboratoriesResolver {
  @TypeGraphQL.Mutation(_returns => Laboratories, {
    nullable: false
  })
  async createOneLaboratories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneLaboratoriesArgs): Promise<Laboratories> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).laboratories.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
