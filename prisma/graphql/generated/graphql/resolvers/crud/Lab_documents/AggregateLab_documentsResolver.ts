import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLab_documentsArgs } from "./args/AggregateLab_documentsArgs";
import { Lab_documents } from "../../../models/Lab_documents";
import { AggregateLab_documents } from "../../outputs/AggregateLab_documents";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_documents)
export class AggregateLab_documentsResolver {
  @TypeGraphQL.Query(_returns => AggregateLab_documents, {
    nullable: false
  })
  async aggregateLab_documents(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLab_documentsArgs): Promise<AggregateLab_documents> {
    return getPrismaFromContext(ctx).lab_documents.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
