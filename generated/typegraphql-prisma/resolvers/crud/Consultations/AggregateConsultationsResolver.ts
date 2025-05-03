import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateConsultationsArgs } from "./args/AggregateConsultationsArgs";
import { Consultations } from "../../../models/Consultations";
import { AggregateConsultations } from "../../outputs/AggregateConsultations";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Consultations)
export class AggregateConsultationsResolver {
  @TypeGraphQL.Query(_returns => AggregateConsultations, {
    nullable: false
  })
  async aggregateConsultations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateConsultationsArgs): Promise<AggregateConsultations> {
    return getPrismaFromContext(ctx).consultations.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
