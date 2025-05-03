import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateDoctorsArgs } from "./args/AggregateDoctorsArgs";
import { Doctors } from "../../../models/Doctors";
import { AggregateDoctors } from "../../outputs/AggregateDoctors";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Doctors)
export class AggregateDoctorsResolver {
  @TypeGraphQL.Query(_returns => AggregateDoctors, {
    nullable: false
  })
  async aggregateDoctors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDoctorsArgs): Promise<AggregateDoctors> {
    return getPrismaFromContext(ctx).doctors.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
