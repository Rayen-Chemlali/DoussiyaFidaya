import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLaboratoriesArgs } from "./args/AggregateLaboratoriesArgs";
import { Laboratories } from "../../../models/Laboratories";
import { AggregateLaboratories } from "../../outputs/AggregateLaboratories";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Laboratories)
export class AggregateLaboratoriesResolver {
  @TypeGraphQL.Query(_returns => AggregateLaboratories, {
    nullable: false
  })
  async aggregateLaboratories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLaboratoriesArgs): Promise<AggregateLaboratories> {
    return getPrismaFromContext(ctx).laboratories.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
