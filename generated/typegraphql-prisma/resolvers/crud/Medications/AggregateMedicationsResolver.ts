import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMedicationsArgs } from "./args/AggregateMedicationsArgs";
import { Medications } from "../../../models/Medications";
import { AggregateMedications } from "../../outputs/AggregateMedications";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Medications)
export class AggregateMedicationsResolver {
  @TypeGraphQL.Query(_returns => AggregateMedications, {
    nullable: false
  })
  async aggregateMedications(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMedicationsArgs): Promise<AggregateMedications> {
    return getPrismaFromContext(ctx).medications.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
