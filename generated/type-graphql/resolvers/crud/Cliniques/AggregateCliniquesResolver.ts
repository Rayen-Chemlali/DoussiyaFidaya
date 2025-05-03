import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCliniquesArgs } from "./args/AggregateCliniquesArgs";
import { Cliniques } from "../../../models/Cliniques";
import { AggregateCliniques } from "../../outputs/AggregateCliniques";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cliniques)
export class AggregateCliniquesResolver {
  @TypeGraphQL.Query(_returns => AggregateCliniques, {
    nullable: false
  })
  async aggregateCliniques(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCliniquesArgs): Promise<AggregateCliniques> {
    return getPrismaFromContext(ctx).cliniques.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
