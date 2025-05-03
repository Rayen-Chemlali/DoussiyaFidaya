import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Lab_documents } from "../../../models/Lab_documents";
import { Xray_results } from "../../../models/Xray_results";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Xray_results)
export class Xray_resultsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Lab_documents, {
    nullable: false
  })
  async lab_documents(@TypeGraphQL.Root() xray_results: Xray_results, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Lab_documents> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).xray_results.findUniqueOrThrow({
      where: {
        id: xray_results.id,
      },
    }).lab_documents({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
