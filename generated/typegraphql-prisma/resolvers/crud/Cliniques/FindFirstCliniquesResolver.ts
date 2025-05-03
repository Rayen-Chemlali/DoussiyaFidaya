import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCliniquesArgs } from "./args/FindFirstCliniquesArgs";
import { Cliniques } from "../../../models/Cliniques";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cliniques)
export class FindFirstCliniquesResolver {
  @TypeGraphQL.Query(_returns => Cliniques, {
    nullable: true
  })
  async findFirstCliniques(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCliniquesArgs): Promise<Cliniques | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).cliniques.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
