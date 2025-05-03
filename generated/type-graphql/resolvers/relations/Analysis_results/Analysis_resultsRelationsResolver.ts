import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Analysis_results } from "../../../models/Analysis_results";
import { Lab_documents } from "../../../models/Lab_documents";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Analysis_results)
export class Analysis_resultsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Lab_documents, {
    nullable: false
  })
  async lab_documents(@TypeGraphQL.Root() analysis_results: Analysis_results, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Lab_documents> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analysis_results.findUniqueOrThrow({
      where: {
        id: analysis_results.id,
      },
    }).lab_documents({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
