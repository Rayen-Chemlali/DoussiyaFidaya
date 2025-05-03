import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePatientsArgs } from "./args/AggregatePatientsArgs";
import { Patients } from "../../../models/Patients";
import { AggregatePatients } from "../../outputs/AggregatePatients";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Patients)
export class AggregatePatientsResolver {
  @TypeGraphQL.Query(_returns => AggregatePatients, {
    nullable: false
  })
  async aggregatePatients(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePatientsArgs): Promise<AggregatePatients> {
    return getPrismaFromContext(ctx).patients.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
