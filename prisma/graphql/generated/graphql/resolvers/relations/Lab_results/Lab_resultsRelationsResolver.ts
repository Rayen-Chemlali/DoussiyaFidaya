import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Lab_documents } from "../../../models/Lab_documents";
import { Lab_results } from "../../../models/Lab_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_results)
export class Lab_resultsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Lab_documents, {
    nullable: false
  })
  async lab_documents(@TypeGraphQL.Root() lab_results: Lab_results, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Lab_documents> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_results.findUniqueOrThrow({
      where: {
        id: lab_results.id,
      },
    }).lab_documents({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
