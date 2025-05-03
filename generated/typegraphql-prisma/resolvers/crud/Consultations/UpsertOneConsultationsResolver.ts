import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneConsultationsArgs } from "./args/UpsertOneConsultationsArgs";
import { Consultations } from "../../../models/Consultations";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Consultations)
export class UpsertOneConsultationsResolver {
  @TypeGraphQL.Mutation(_returns => Consultations, {
    nullable: false
  })
  async upsertOneConsultations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneConsultationsArgs): Promise<Consultations> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultations.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
