import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Ctscan_results } from "../../../models/Ctscan_results";
import { Lab_documents } from "../../../models/Lab_documents";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Ctscan_results)
export class Ctscan_resultsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Lab_documents, {
    nullable: false
  })
  async lab_documents(@TypeGraphQL.Root() ctscan_results: Ctscan_results, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Lab_documents> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ctscan_results.findUniqueOrThrow({
      where: {
        id: ctscan_results.id,
      },
    }).lab_documents({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
