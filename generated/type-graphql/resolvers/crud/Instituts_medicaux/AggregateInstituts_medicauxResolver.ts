import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateInstituts_medicauxArgs } from "./args/AggregateInstituts_medicauxArgs";
import { Instituts_medicaux } from "../../../models/Instituts_medicaux";
import { AggregateInstituts_medicaux } from "../../outputs/AggregateInstituts_medicaux";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Instituts_medicaux)
export class AggregateInstituts_medicauxResolver {
  @TypeGraphQL.Query(_returns => AggregateInstituts_medicaux, {
    nullable: false
  })
  async aggregateInstituts_medicaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateInstituts_medicauxArgs): Promise<AggregateInstituts_medicaux> {
    return getPrismaFromContext(ctx).instituts_medicaux.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
